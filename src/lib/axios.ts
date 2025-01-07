import toast from "@/components/toast/toast";
import axiosCore, {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const axios = axiosCore.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1`,
  timeout: 1000,
});

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  requiresAuth?: boolean; // Example custom property
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error: boolean;
  redirect?: string | null | undefined;
  forceLogout?: boolean;
  _t?: {
    accessToken: string;
    refreshToken: string;
  };
}

axios.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const token = localStorage.getItem("_at");
    if (token && config.requiresAuth !== false) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  <T>(response: AxiosResponse<ApiResponse<T>>) => {
    const tokens = response.data._t;
    if (tokens?.accessToken) {
      localStorage.setItem("_at", tokens.accessToken);
    }
    if (tokens?.refreshToken) {
      localStorage.setItem("_rt", tokens.refreshToken);
    }

    if (response?.data?.message) {
      toast({
        title: response.data.message,
        options: {
          type: "success",
        },
      });
    }

    return response;
  },
  async (error) => {
    if (
      error.response.status === 401 &&
      error.response.data.code === "INVALID_TOKEN"
    ) {
      //update access token using refresh token
      const refreshToken = localStorage.getItem("_rt");
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/refresh-token",
          { refreshToken }
        );
        localStorage.setItem("_at", response.data._t?.accessToken);
        error.config.headers[
          "Authorization"
        ] = `Bearer ${response.data._t?.accessToken}`;
        //retry the request

        return axios(error.config);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        // Redirect to login or show error
      }
    }
    if (error.response.data.message === "Invalid or expired refresh token") {
      console.log("we got u", error.response);

      // Redirect to login page or show error
      // window.location.href = "/login"; // Redirect user to login
    }

    if (error.response?.data?.message) {
      toast({
        title: error.response.data.message,
        options: {
          type: "error",
        },
      });
    }
    return Promise.reject(error);
  }
);
export { axios };
