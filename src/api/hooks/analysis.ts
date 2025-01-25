import { useQuery } from "@tanstack/react-query";
import { getUserEnergyAnalysisQuestions } from "../routes/analysis";
import { queryKeys } from "../keys";

export const useGetUserEnergyAnalysisQuestions = () => {
  return useQuery({
    queryFn: getUserEnergyAnalysisQuestions,
    queryKey: [queryKeys.getUserEnergyAnalysisQuestions],
  });
};
