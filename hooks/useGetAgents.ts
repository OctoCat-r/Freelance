import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import ky, { HTTPError } from "ky";

export const getAgent = async (agentId: string) => {
  const response = await ky.get(`/api/agents?agentId=${agentId}`).json();
  return response;
};

const useGetAgents = (
  agentId: string,
  options?: UseQueryOptions<unknown, HTTPError>
) => {
  return useQuery({
    queryKey: ["agents"],
    queryFn: () => getAgent(agentId),
    ...options,
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetAgents;
