import React, { useState } from "react";
import { motion } from "framer-motion";
import userDefault from "assets/images/user_default_icon/default_user-icon.png";

import { VscTrash } from "react-icons/vsc";
import { BsPlusCircleFill } from "react-icons/bs";

const UploadImage = ({ setFieldValue, inputName, type, errors, values }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileHandler = (event) => {
    const {
      lastModified,
      lastModifiedDate,
      name,
      size,
      type,
      webkitRelativePath,
    } = event.target.files[0];

    setFieldValue(inputName, {
      lastModified,
      lastModifiedDate,
      name,
      size,
      type,
      webkitRelativePath,
    });
  };

  return (
    <div>
      <input
        type="file"
        hidden
        name={inputName}
        accept="image/*"
        id="myImage"
        onChange={(event) => {
          fileHandler(event);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <div className=" my-10">
        {selectedImage ? (
          <div className="relative">
            <label
              htmlFor="myImage"
              className="w-[150px] h-[150px] block rounded-full overflow-hidden"
            >
              <img
                className="object-cover w-[150px] h-[150px]"
                alt="Avatar"
                width={"250px"}
                src={
                  !values
                    ? setSelectedImage(null)
                    : URL.createObjectURL(selectedImage)
                }
              />
            </label>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="absolute right-0 bottom-0 border border-red-400 rounded-full min-w-[32px] min-h-[32px] flex items-center justify-center bg-slate-100"
              onClick={() => setSelectedImage(null)}
            >
              <VscTrash className="text-red-500" size={24} />
            </motion.button>
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

export default UploadImage;
