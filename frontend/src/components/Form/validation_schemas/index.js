import * as yup from "yup";

import { passwordRegEx } from "settings/passwordRegEx";
import { FILE_SIZE, SUPPORTED_FORMATS } from "settings/file-upload-settings";

export const formValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter valid email address")
    .required("E-mail Required"),
  name: yup.string().min(5).required("Name Required"),
  age: yup.number().positive().integer().required("Age Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRegEx, "Please Create a strong password")
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm Password Required"),
  avatar: yup
    .mixed()
    .nullable()
    .test(
      "fileSize",
      "The file is too large",
      (value) => value || (value && value.size <= FILE_SIZE)
    )
    .test(
      "format",
      "Only the following formats are accepted: .jpeg, .jpg, .gif, .png",
      (value) => value || (value && SUPPORTED_FORMATS.includes(value[0].type))
    ),
});
