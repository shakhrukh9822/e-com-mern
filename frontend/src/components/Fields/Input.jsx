import React from "react";
import { PropTypes } from "prop-types";

const Input = ({
  name,
  icon,
  label,
  value,
  onBlur,
  errors,
  touched,
  inputId,
  onChange,
  inputRef,
  inputType,
  inputAccept,
  setFieldValue,
  placeholder,
  inputLabelIcon,
  inputClassName,
  labelClassName,
  inputGroupClassName,
  inputGroupWrapperClassName,
}) => {
  return (
    <div
      className={`w-[100%] relative ${inputGroupClassName}`}
      style={{
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <div className={`w-[100%] ${inputGroupWrapperClassName}`}>
        {label ? (
          <label className={`w-[100%] ${labelClassName}`} htmlFor={inputId}>
            {label}
          </label>
        ) : icon ? (
          <div className={`mr-1 ${inputLabelIcon}`}>{icon}</div>
        ) : null}

        <input
          name={name}
          id={inputId}
          value={value}
          type={inputType}
          className={`py-1 text-[18px] ${
            errors[name] && touched[name] ? " border-red-500" : ""
          } ${inputClassName}`}
          placeholder={placeholder}
          onBlur={onBlur ? onBlur : null}
          onChange={onChange ? onChange : null}
          accept={inputAccept ? inputAccept : null}
        />
      </div>
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-[17px] absolute -bottom-7 right-0">
          {errors[name]}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  touched: PropTypes.object,
  inputId: PropTypes.string,
  className: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  inputAccept: PropTypes.string,
  inputLabelIcon: PropTypes.string,
  labelClassName: PropTypes.string,
  inputGroupClassName: PropTypes.string,
  inputGroupWrapperClassName: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  onBlur: () => console.log("Blur"),
  label: "",
  value: "",
  errors: {},
  onChange: () => console.log("OnChange"),
  touched: {},
  inputId: "",
  className: "",
  inputType: "",
  placeholder: "placeholder",
  labelClassName: "",
  inputGroupClassName: "",
  inputGroupWrapperClassName: "",
  // inputAccept: "image/*",
  inputAccept: "",
};

export default Input;
