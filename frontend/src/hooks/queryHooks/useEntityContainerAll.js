import { useQuery } from "react-query";
import axiosClient from "services/api";

const useEntityContainerAll = ({
  entity,
  url,
  onSuccess,
  onError,
  staleTime = Infinity,
  cacheTime = Infinity,
  refetchOnMount = false,
  refetchOnWindowFocus = true,
  refetchInterval = false,
  enabled = true,
  keepPreviousData = false,
  params = {},
  headers = {},
  retry,
}) => {
  return useQuery(
    [entity],
    async () =>
      await axiosClient.get(url, { params: params }, { headers: headers }),
    {
      staleTime: staleTime || Infinity,
      cacheTime: cacheTime || Infinity,
      refetchOnMount: refetchOnMount,
      refetchOnWindowFocus: refetchOnWindowFocus,
      refetchInterval: refetchInterval,
      enabled: enabled,
      onError: onError,
      onSuccess: onSuccess,
      keepPreviousData: keepPreviousData,
      retry: retry || 3,
    }
  );
};

export { useEntityContainerAll };
