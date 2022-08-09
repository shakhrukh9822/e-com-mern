import React from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useActions } from "hooks/actionHooks/useActions";
import { useEntityContainerUpdate } from "hooks/queryHooks";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";

// icons
import { RiUser3Fill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

// components
import { Form } from "components/Form";
import { Input } from "components/Fields";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { GoBackButton } from "components/Buttons";
import { UploadImage } from "components/UploadImage";
import { IsAuthentificated } from "components/IsAuthentificated";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { userUpdateProfile } = useActions();

  const { mutateAsync } = useEntityContainerUpdate({
    url: "/api/v1/me/update",
  });

  const { user } = useSelector(selectAuthedUser);

  const userName = get(user, "name");
  const userEmail = get(user, "email");
  const userAvatar = get(user, "avatar.url");

  const initialStateValues = {
    avatar: userAvatar,
    name: userName,
    email: userEmail,
  };

  const onSubmit = async (values, actions) => {
    try {
      console.log(values);
      const { resetForm } = actions;
      const data = await mutateAsync(values);

      userUpdateProfile(data);
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
    <IsAuthentificated>
      <IsAuthentificated>
        <Helmet>
          <title>Update</title>
        </Helmet>
        <Container extraClasses="pt-10">
          <GoBackButton />
          <MainTitle title={"Update Profile"} extraClasses="mx-auto" />
          <div className="form-wrapper flex items-center flex-col lg:w-[50%] xl:w-[35%] xxl:w-[25%] w-[80%] mx-auto">
            <Form
              fieldsInitialStateValues={initialStateValues}
              formClassName={"flex items-center w-[100%] flex-col"}
              onSubmit={onSubmit}
              submitButtonTitle={"Update"}
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
                console.log(values);
                return (
                  <>
                    <UploadImage
                      inputName={"avatar"}
                      type={"file"}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      values={values.file}
                      userAvatar={userAvatar}
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
                  </>
                );
              }}
            </Form>
          </div>
        </Container>
      </IsAuthentificated>
    </IsAuthentificated>
  );
};

export default UpdateProfile;
