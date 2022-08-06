import React from "react";
import Modal from "react-modal";
import { PropTypes } from "prop-types";

// icons
import { CgClose } from "react-icons/cg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
  },
};

Modal.setAppElement("#root");

const ModalWindow = ({
  modalIsOpen,
  setModalIsOpen,
  className,
  openButton,
  closeButton,
  children,
  closeButtonWrapper,
}) => {
  return (
    <div>
      {openButton ? (
        openButton
      ) : (
        <button onClick={() => setModalIsOpen(true)} type="button">
          Open Modal
        </button>
      )}
      <Modal
        className={`relative transition-all border p-5 z-[10000] ${className}`}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        <div className={`absolute top-2 right-2 ${closeButtonWrapper}`}>
          {closeButton ? (
            closeButton
          ) : (
            <button onClick={() => setModalIsOpen(false)}>
              <CgClose size={26} />
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

ModalWindow.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  className: PropTypes.string,
  openButton: PropTypes.object,
  closeButton: PropTypes.object,
  children: PropTypes.object,
  closeButtonWrapper: PropTypes.string,
};

export default ModalWindow;
