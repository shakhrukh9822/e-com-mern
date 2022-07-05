import { useQuery } from "react-query";
import axiosClient from "services/api";

const useEntityContainerOne = ({
  id = "",
  entity = "",
  url = "",
  onSuccess,
  onError,
  slug = "",
  staleTime = Infinity,
  cacheTime = Infinity,
  refetchOnMount = true,
  refetchOnWindowFocus = true,
  refetchInterval = false,
  enabled = !!id,
  keepPreviousData = false,
  params = {},
  headers = false,
}) => {
  const getOne = slug ? `${url}/${slug}/${id}` : `${url}/${id}`;

  return useQuery(
    [entity, id],
    async () => await axiosClient.get(getOne, { headers }),
    {
      staleTime: staleTime,
      cacheTime: cacheTime,
      refetchOnMount: refetchOnMount,
      refetchOnWindowFocus: refetchOnWindowFocus,
      refetchInterval: refetchInterval,
      enabled: enabled,
      onError: onError,
      onSuccess: onSuccess,
      keepPreviousData: keepPreviousData,
    }
  );
};

export { useEntityContainerOne };
