import React, { useState } from "react";
import ModalWindow from "components/Modal/Modal";
import UserAccountUploadImg from "./UserAccountUploadImg";
import { useEntityContainerPost } from "hooks/queryHooks";
import { useActions } from "hooks/actionHooks/useActions";
import { toast } from "react-toastify";
import { Form } from "components/Form";
import { Container } from "components/Container";
import { BiImage } from "react-icons/bi";

import { CgClose } from "react-icons/cg";

const UserAccountModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { userAuthentification } = useActions();

  const { mutateAsync } = useEntityContainerPost({
    url: "/api/v1/set-user-banner",
  });

  const onSubmit = async (values) => {
    try {
      const data = await mutateAsync(values);
      userAuthentification(data);
      if (data) {
        setModalIsOpen(false);
      }
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
    <Container
      extraClasses={`flex justify-end relative ${
        modalIsOpen ? "z-[0]" : "z-[50]"
      }  -top-[22px]`}
    >
      <ModalWindow
        className={"px-10 py-10 bg-white rounded-md shadow-2xl border"}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        closeButton={
          <button
            className="border-[1.5px] p-1 rounded-full hover:bg-slate-900 hover:text-white transition-all"
            onClick={() => setModalIsOpen(false)}
          >
            <CgClose size={22} />
          </button>
        }
        openButton={
          <button
            onClick={() => setModalIsOpen(true)}
            className="border-gray-900 p-2 rounded-full text-white bg-gray-900"
          >
            <BiImage size={26} />
          </button>
        }
      >
        <Form
          onSubmit={onSubmit}
          submitButtonTitle="upload"
          submitBtnWrapper="flex item-center justify-center"
          submitBtnClassName="py-1 rounded-md font-semibold text-[20px]"
          fields={[
            {
              name: "user_banner",
              type: "file",
            },
          ]}
        >
          {({ setFieldValue }) => {
            return (
              <>
                <UserAccountUploadImg
                  setFieldValue={setFieldValue}
                  inputName={"user_banner"}
                />
              </>
            );
          }}
        </Form>
      </ModalWindow>
    </Container>
  );
};

export default UserAccountModal;
