import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";

const IsAuthentificated = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthentificated } = useSelector(selectAuthedUser);

  useEffect(() => {
    if (!isAuthentificated) {
      navigate("/sign-in");
    }
  }, [isAuthentificated, navigate]);
  return <div>{children}</div>;
};

export default IsAuthentificated;
