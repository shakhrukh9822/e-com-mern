import useUploadImage from "hooks/uploadFileHooks/useUploadImage";
import React, { useEffect } from "react";

import placeholderImg from "assets/images/place-holder-imgs/placeholdere_product.png";
import { FaCloudUploadAlt } from "react-icons/fa";

const UserAccountUploadImg = ({ setFieldValue, inputName, userBanner }) => {
  const { handleChange, image, setImage } = useUploadImage({
    setFieldValue,
    inputName,
  });

  useEffect(() => {
    if (userBanner) {
      setImage(userBanner);
    }
  }, [setImage, userBanner]);

  return (
    <div>
      <div className="w-[100%] h-[250px] md:h-[350px] mb-2 rounded-md overflow-hidden">
        <img
          className="w-[100%] h-[100%]"
          src={image ? image : placeholderImg}
          alt="user banner"
        />
      </div>

      <div className="relative">
        <input
          type="file"
          hidden
          name={inputName}
          accept="image/*"
          id="myImage"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label
          htmlFor="myImage"
          className="bg-slate-900 text-white flex justify-center py-2 mb-4"
        >
          <FaCloudUploadAlt size={30} />
        </label>
      </div>
    </div>
  );
};

export default UserAccountUploadImg;
