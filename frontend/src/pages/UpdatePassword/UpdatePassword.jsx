import React from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useActions } from "hooks/actionHooks/useActions";
import { useEntityContainerUpdate } from "hooks/queryHooks";

// icons
import { IoIosLock } from "react-icons/io";

// components
import { Form } from "components/Form";
import { Input } from "components/Fields";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { GoBackToButton } from "components/Buttons";
import { IsAuthentificated } from "components/IsAuthentificated";
import { LoadingText } from "components/LoadingText";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { userUpdateActions } = useActions();

  const { mutateAsync, isLoading } = useEntityContainerUpdate({
    url: "/api/v1/password/update",
  });

  const onSubmit = async (values, actions) => {
    try {
      const { resetForm } = actions;
      const data = await mutateAsync(values);

      userUpdateActions(data);
      resetForm();

      toast.success(data.message, {
        position: "top-right",
      });
      navigate("/user-account/profile");
    } catch (error) {
      toast.error(error?.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <IsAuthentificated>
      <Helmet>
        <title>Update Password</title>
      </Helmet>
      {isLoading ? (
        <LoadingText title={"Updating"} />
      ) : (
        <Container extraClasses="pt-10">
          <GoBackToButton navigatePath={"/user-account/profile"} />
          <MainTitle title={"Update Password"} extraClasses="mx-auto" />
          <div className="form-wrapper flex items-center flex-col lg:w-[50%] xl:w-[35%] xxl:w-[25%] w-[80%] mx-auto">
            <Form
              formClassName={
                "flex items-center w-[100%] flex-col pt-10 lg:pt-20"
              }
              onSubmit={onSubmit}
              submitButtonTitle={"Update"}
              submitBtnClassName={
                "rounded-sm px-8 py-[2px] md:ml-auto mx-auto capitalize text-[20px] font-semibold "
              }
              fields={[
                {
                  name: "oldPassword",
                  type: "password",
                },
                {
                  name: "password",
                  type: "password",
                },
                {
                  name: "confirmPassword",
                  type: "password",
                },
              ]}
            >
              {({ values, touched, handleBlur, handleChange, errors }) => {
                return (
                  <>
                    <Input
                      name="oldPassword"
                      errors={errors}
                      inputId={"oldPassword"}
                      touched={touched}
                      inputType={"password"}
                      value={values.oldPassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputGroupClassName={"mb-10"}
                      placeholder={"Enter your Old Password"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<IoIosLock size={24} color={"#010101"} />}
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
                      placeholder={"Enter your New Password"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<IoIosLock size={24} color={"#010101"} />}
                      inputGroupWrapperClassName={"flex items-center px-4 py-2"}
                    />
                    <Input
                      name="confirmPassword"
                      errors={errors}
                      inputId={"confirmPassword"}
                      touched={touched}
                      inputType={"password"}
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputGroupClassName={"mb-10"}
                      placeholder={"Confirm Password"}
                      inputClassName={"w-[100%] border-none"}
                      icon={<IoIosLock size={24} color={"#010101"} />}
                      inputGroupWrapperClassName={"flex items-center px-4 py-2"}
                    />
                  </>
                );
              }}
            </Form>
          </div>
        </Container>
      )}
    </IsAuthentificated>
  );
};

export default UpdatePassword;
