import { useMutation } from "react-query";
import axiosClient from "services/api";

const useEntityContainerUpdate = ({
  url,
  onSuccess,
  onError,
  // params = {},
  headers = false,
}) => {
  const updateItem = async (item) => {
    const response = await axiosClient.put(url, item, { headers });
    return response;
  };
  return useMutation(updateItem, {
    onError: onError,
    onSuccess: onSuccess,
  });
};

export { useEntityContainerUpdate };
