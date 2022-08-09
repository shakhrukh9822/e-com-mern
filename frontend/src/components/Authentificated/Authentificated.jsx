import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";

const Authentificated = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthentificated } = useSelector(selectAuthedUser);

  useEffect(() => {
    if (isAuthentificated) {
      navigate("/user-account");
    }
  }, [isAuthentificated, navigate]);
  return <div>{children}</div>;
};

export default Authentificated;
