import { useMutation } from "react-query";
import axiosClient from "services/api";

const useEntityContainerPost = ({
  url,
  onSuccess,
  onError,
  // params = {},
  headers = "multipart/form-data",
}) => {
  const addItem = async (item) => {
    const response = await axiosClient.post(url, item, {
      "Content-type": headers,
    });
    return response;
  };
  return useMutation(addItem, {
    onError: onError,
    onSuccess: onSuccess,
  });
};

export { useEntityContainerPost };
