import { formValidationSchema } from "../validation_schemas";

export const getFieldsName = async (fields) => {
  return await fields
    .map((field) => {
      const resultObj = {};

      return {
        ...resultObj,
        [Object.values(field.name).join("")]: "",
      };
    })
    .reduce((r, c) => Object.assign(r, c), {});
};

export const getFieldsValidationSchema = (fields) => {
  const fieldsType = [];

  for (let i = 0; i < fields.length; i++) {
    Object.keys(formValidationSchema?.fields)
      .filter((key) => key.includes(fields[i]?.name))
      .reduce((cur, key) => {
        return fieldsType.push(
          Object.assign(cur, { [key]: formValidationSchema?.fields[key] })
        );
      }, {});
  }

  formValidationSchema.fields = fieldsType.reduce(
    (r, c) => Object.assign(r, c),
    {}
  );

  return formValidationSchema;
};
