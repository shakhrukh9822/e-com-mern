import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// icons
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

// hooks
import { useEntityContainerPost } from "hooks/queryHooks";
import { useActions } from "hooks/actionHooks/useActions";

// components
import { Form } from "components/Form";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { Input } from "components/Fields";
import { Divider } from "components/Divider";
import { toast } from "react-toastify";
import { LoadingText } from "components/LoadingText";
import { Authentificated } from "components/Authentificated";

const SignIn = () => {
  const navigate = useNavigate();
  const { userAuthentification } = useActions();
  const { mutateAsync, isLoading } = useEntityContainerPost({
    url: "/api/v1/login",
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
      toast.error(error?.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <Authentificated>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      {isLoading ? (
        <LoadingText title={"Signing In"} />
      ) : (
        <Container extraClasses="pt-10">
          <MainTitle title={"Sign In"} extraClasses="mx-auto" />
          <div className="form-wrapper flex items-center pt-10 lg:pt-20 flex-col lg:w-[50%] xl:w-[35%] xxl:w-[25%] w-[80%] mx-auto">
            <Form
              formClassName={"flex items-center w-[100%] flex-col"}
              onSubmit={onSubmit}
              submitButtonTitle={"Sign in"}
              submitBtnClassName={
                "rounded-sm px-8 py-[2px] md:ml-auto mx-auto capitalize text-[20px] font-semibold "
              }
              fields={[
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
              {({ values, touched, handleBlur, handleChange, errors }) => {
                return (
                  <>
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
            <div className="mt-0">
              <Link className="text-[18px] underline" to={"/forgot-passowrd"}>
                Forgot Password ?
              </Link>
            </div>
            <div className="w-[100%] md:my-10 my-5 rounded-sm border text-[18px] bg-white border-[#DBDBDB] py-[10px] flex items-center justify-center">
              <span className="block m-[8px]">Don't have an account?</span>
              <Link className="underline" to={"/sign-up"}>
                Sign Up
              </Link>
            </div>
          </div>
        </Container>
      )}
    </Authentificated>
  );
};

export default SignIn;
