import React from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEntityContainerPost } from "hooks/queryHooks";

// icons
import { MdAlternateEmail } from "react-icons/md";

// components
import { Form } from "components/Form";
import { Input } from "components/Fields";
import { Divider } from "components/Divider";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { LoadingText } from "components/LoadingText";

const ForgotPassword = () => {
  const { mutateAsync, isLoading } = useEntityContainerPost({
    url: "/api/v1/password/forgot",
  });

  const onSubmit = async (values, actions) => {
    try {
      const { resetForm } = actions;
      const data = await mutateAsync(values);

      resetForm();
      toast.success(data.message, {
        position: "top-right",
      });
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
    <div>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      {isLoading ? (
        <LoadingText title={"Wait...."} />
      ) : (
        <Container extraClasses="pt-10">
          <MainTitle title={"Forgot Password"} extraClasses="mx-auto" />
          <div className="form-wrapper flex items-center flex-col lg:w-[50%] xl:w-[35%] xxl:w-[25%] w-[80%] mx-auto">
            <Form
              formClassName={
                "flex items-center w-[100%] flex-col pt-10 lg:pt-20"
              }
              onSubmit={onSubmit}
              submitButtonTitle={"Send Message"}
              submitBtnClassName={
                "rounded-sm px-8 py-[2px] md:ml-auto mx-auto capitalize text-[20px] font-semibold "
              }
              fields={[
                {
                  name: "email",
                  type: "email",
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
    </div>
  );
};

export default ForgotPassword;
