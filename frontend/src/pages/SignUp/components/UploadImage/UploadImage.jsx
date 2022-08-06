import React from "react";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import useUploadImage from "hooks/uploadFileHooks/useUploadImage";

// avatar
import userDefault from "assets/images/user_default_icon/default_user-icon.png";

// icons
import { MdModeEditOutline } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";

const UploadImage = ({ setFieldValue, inputName, errors }) => {
  const { handleChange, image } = useUploadImage({ setFieldValue, inputName });

  return (
    <div>
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
      <div className=" my-10">
        {image ? (
          <div className="relative">
            <div className="w-[150px] h-[150px] block rounded-full overflow-hidden">
              <img
                className="object-cover w-[150px] h-[150px]"
                alt="Avatar"
                width={"250px"}
                src={image}
              />
            </div>
            <label
              htmlFor="myImage"
              className="absolute right-0 bottom-0 border border-amber-700 rounded-full min-w-[32px] min-h-[32px] flex items-center justify-center bg-slate-100 cursor-pointer"
            >
              <MdModeEditOutline className="text-amber-700" size={24} />
            </label>
            {errors[inputName] && (
              <p className="text-red-500 text-[17px] absolute -bottom-7 right-0">
                {errors[inputName]}
              </p>
            )}
          </div>
        ) : (
          <div className="relative">
            <img
              className="w-[150px] h-[150px] block rounded-full overflow-hidden"
              src={userDefault}
              alt="user default"
            />
            <motion.label
              whileTap={{ scale: 0.85 }}
              className="absolute right-0 bottom-0 cursor-pointer"
              htmlFor="myImage"
            >
              <BsPlusCircleFill
                className="text-gray-500 hover:text-gray-800"
                size={32}
              />
            </motion.label>
          </div>
        )}
      </div>
    </div>
  );
};

UploadImage.propTypes = {
  products: PropTypes.array,
  setFieldValue: PropTypes.func,
  inputName: PropTypes.string,
  errors: PropTypes.object,
};

export default UploadImage;
