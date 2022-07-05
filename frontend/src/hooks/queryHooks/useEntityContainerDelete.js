import { useMutation } from "react-query";
import axiosClient from "services/api";

const useEntityContainerDelete = ({
  url,
  onSuccess,
  onError,
  // params = {},
  headers = false,
}) => {
  const deleteItem = async (item) => {
    const response = await axiosClient.delete(url, item, { headers });
    return response;
  };
  return useMutation(deleteItem, {
    onError: onError,
    onSuccess: onSuccess,
  });
};

export { useEntityContainerDelete };
