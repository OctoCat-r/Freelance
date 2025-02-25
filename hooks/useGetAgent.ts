import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import ky, { HTTPError } from "ky";

interface AGENTDETAILS {
  agent_id: string;
  name: string;
  created_at_unix_secs: number;
  access_level: string;
}
interface RESPONSE {
  agents: AGENTDETAILS[];
  has_more: boolean;
  next_cursor: string;
}

const useGetAgentList = (
  options?: UseQueryOptions<AGENTDETAILS[], HTTPError>
) => {
  //   const getAgent = async () => {
  //     const response = await ky
  //       .get(url, {
  //         method: "get",
  //         headers: {
  //           "xi-api-key":
  //             process.env.NODE_ENV === "development"
  //               ? process.env.NEXT_PUBLIC_API_KEY
  //               : undefined,
  //         },
  //       })
  //       .json<RESPONSE>();
  //     return response?.agents;
  //   };

  const getAgent = async (): Promise<AGENTDETAILS[]> => {
    const response = await ky.get("/api/proxy").json<RESPONSE>();
    return response.agents;
  };

  return useQuery({
    queryKey: ["agents"],
    queryFn: getAgent,
    ...options,
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetAgentList;
