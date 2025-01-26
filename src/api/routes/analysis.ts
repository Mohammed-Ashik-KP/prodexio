import { axios } from "@/lib/axios";
import { UserEnergyLevelQuestionsResponseType } from "@/types/api";

export const getUserEnergyAnalysisQuestions = async (): Promise<
  UserEnergyLevelQuestionsResponseType | undefined
> => {
  try {
    const response = await axios.get("/user-energy-analysis-questions");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
