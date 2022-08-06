import { useState } from "react";
import { PropTypes } from "prop-types";

const useUploadImage = ({ setFieldValue, inputName }) => {
  const [image, setImage] = useState(null);

  const previewFiles = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setImage(reader.result);
      setFieldValue(inputName, reader.result);
    };
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    previewFiles(file);
  };

  return { image, handleChange, setImage };
};

useUploadImage.propTypes = {
  inputName: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default useUploadImage;
