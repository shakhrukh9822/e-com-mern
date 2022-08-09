import React from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "hooks/actionHooks/useActions";
import { useEntityContainerPost } from "hooks/queryHooks";

// icons
import { IoIosLock } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

// components
import { Form } from "components/Form";
import { Input } from "components/Fields";
import { Divider } from "components/Divider";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { UploadImage } from "components/UploadImage";
import { LoadingText } from "components/LoadingText";
import { Authentificated } from "components/Authentificated";

const SignUp = () => {
  const navigate = useNavigate();
  const { userAuthentification } = useActions();
  const { mutateAsync, isLoading } = useEntityContainerPost({
    url: "/api/v1/registration",
  });

  const onSubmit = async (values, actions) => {
    try {
      const { resetForm } = actions;
      const data = await mutateAsync(values);

      userAuthentification(data);
      resetForm();
      toast.success(data.message, {
        position: "top-right",
      });
      navigate("/user-account");
    } catch (error) {
      if (error?.response.status === 413) {
        toast.error("Avatar image size is to large", {
          position: "top-right",
        });
      } else {
        toast.error(error?.response.data.message, {
          position: "top-right",
        });
      }
    }
  };

  return (
    <Authentificated>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      {isLoading ? (
        <LoadingText title={"Signing Up"} />
      ) : (
        <Container extraClasses="pt-10">
          <MainTitle title={"Sign Up"} extraClasses="mx-auto" />
          <div className="form-wrapper flex items-center flex-col lg:w-[50%] xl:w-[35%] xxl:w-[25%] w-[80%] mx-auto">
            <Form
              formClassName={"flex items-center w-[100%] flex-col"}
              onSubmit={onSubmit}
              submitButtonTitle={"Sign up"}
              submitBtnClassName={
                "rounded-sm px-8 py-[2px] md:ml-auto mx-auto capitalize text-[20px] font-semibold "
              }
              fields={[
                {
                  name: "avatar",
                  type: "file",
                },
                {
                  name: "name",
                  type: "text",
                },
                {
                  name: "email",
                  type: "email",
                },
                {
                  name: "password",
                  type: "password",
                },
              ]}
            >
              {({
                values,
                touched,
                handleBlur,
                handleChange,
                errors,
                setFieldValue,
              }) => {
                return (
                  <>
                    <UploadImage
                      inputName={"avatar"}
                      type={"file"}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      values={values.file}
                    />
                    <Input
                      name="name"
                      errors={errors}
                      inputId={"name"}
                      touched={touched}
                      inputType={"text"}
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputGroupClassName={"mb-10"}
                      placeholder={"Enter your Name"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<RiUser3Fill size={24} color={"#010101"} />}
                      inputGroupWrapperClassName={"flex items-center px-4 py-2"}
                    />
                    <Input
                      name="email"
                      errors={errors}
                      inputId={"email"}
                      touched={touched}
                      inputType={"text"}
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputGroupClassName={"mb-10"}
                      placeholder={"Enter your Email"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<MdAlternateEmail size={24} color={"#010101"} />}
                      inputGroupWrapperClassName={"flex items-center px-4 py-2"}
                    />
                    <Input
                      name="password"
                      errors={errors}
                      inputId={"password"}
                      touched={touched}
                      inputType={"password"}
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputGroupClassName={"mb-10"}
                      placeholder={"Enter your Password"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<IoIosLock size={24} color={"#010101"} />}
                      inputGroupWrapperClassName={"flex items-center px-4 py-2"}
                    />
                  </>
                );
              }}
            </Form>
            <Divider title={"or"} />
            <div className="w-[100%] md:my-10 my-5 mt-0 rounded-sm border text-[18px] bg-white border-[#DBDBDB] py-[10px] flex items-center justify-center">
              <span className="block m-[8px]">Have an account?</span>
              <Link className="underline" to={"/sign-in"}>
                Sign In
              </Link>
            </div>
          </div>
        </Container>
      )}
    </Authentificated>
  );
};

export default SignUp;
