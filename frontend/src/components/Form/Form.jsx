import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import BounceLoader from "react-spinners/BounceLoader";
import { getFieldsName, getFieldsValidationSchema } from "./utils";

const Form = ({
  fields,
  onSubmit,
  children,
  formClassName,
  submitButtonTitle,
  loadingIcon = true,
  submitBtnClassName,
}) => {
  const fieldsName = getFieldsName(fields);
  const fieldsValidationSchema = getFieldsValidationSchema(fields);
  const loading = loadingIcon ? (
    <BounceLoader color="#fff" size={30} />
  ) : (
    "loading"
  );

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    submitForm,
    setFieldValue,
    encType = false,
  } = useFormik({
    initialValues: fieldsName,
    validationSchema: fieldsValidationSchema,
    onSubmit,
  });

  return (
    <form
      className={`${formClassName} w-[100%]`}
      encType={encType ? "multipart/form-data" : null}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {children({
        handleSubmit,
        submitForm,
        values,
        isSubmitting,
        setFieldValue,
        touched,
        handleBlur,
        handleChange,
        errors,
      })}
      <button
        className={`felx items-center justify-center border border-gray-600 hover:bg-[#18181b] transition-all hover:text-white disabled:bg-[#18181b] disabled:text-white disabled:opacity-40 min-w-[110px] ${submitBtnClassName}`}
        type="submit"
        disabled={!Object.keys(values).length || !isValid}
      >
        {isSubmitting ? (
          <div className="ml-2">{loading}</div>
        ) : (
          submitButtonTitle
        )}
      </button>
    </form>
  );
};

Form.propTypes = {
  loadingIcon: PropTypes.object,
  formClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  fields: PropTypes.array.isRequired,
  submitButtonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  submitBtnClassName: PropTypes.string,
  inputGroupClassName: PropTypes.string,
  inputGroupWrapperClassName: PropTypes.string,
};

Form.defaultProps = {
  submitBtnClassName: "",
  submitButtonTitle: "submit",
};

export default Form;
