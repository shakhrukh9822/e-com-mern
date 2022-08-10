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
  submitBtnWrapper,
  fieldsInitialStateValues,
}) => {
  const fieldsName = getFieldsName(fields);
  const fieldsValidationSchema = getFieldsValidationSchema(fields);

  const loading = loadingIcon ? (
    <BounceLoader color="#211c1c" size={30} />
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
    submitForm,
    setFieldValue,
    dirty,
  } = useFormik({
    initialValues: fieldsInitialStateValues
      ? fieldsInitialStateValues
      : fieldsName,
    validationSchema: fieldsValidationSchema,
    onSubmit,
  });

  return (
    <form
      className={`${formClassName ? formClassName : ""} w-[100%]`}
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
      <div className={submitBtnWrapper}>
        <button
          className={`felx items-center justify-center capitalize border border-gray-600 hover:bg-[#18181b] transition-all hover:text-white disabled:bg-[#18181b] disabled:text-white disabled:opacity-40 min-w-[110px] ${submitBtnClassName}`}
          type="submit"
          disabled={!dirty}
        >
          {isSubmitting ? (
            <div className="w-[100%] flex items-center justify-center">
              {loading}
            </div>
          ) : (
            submitButtonTitle
          )}
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  loadingIcon: PropTypes.object,
  formClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  fields: PropTypes.array.isRequired,
  submitBtnWrapper: PropTypes.string,
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
