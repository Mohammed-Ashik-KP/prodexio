import { axios } from "@/lib/axios";

export const getUserEnergyAnalysisQuestions = async () => {
  try {
    const response = await axios.get("/user-energy-analysis-questions");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
