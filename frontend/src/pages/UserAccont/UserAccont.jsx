import { Container } from "components/Container";
import { get } from "lodash";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";
import UserAccountBanner from "./components/UserAccountBanner";
import UserAccountOptions from "./components/UserAccountOptions";

const UserAccont = () => {
  const navigate = useNavigate();
  const { isAuthentificated, user } = useSelector(selectAuthedUser);

  console.log(user);

  const userAvatar = get(user, "avatar.url");
  const userBanner = get(user, "user_banner.url");
  const userRole = get(user, "role");

  useEffect(() => {
    if (!isAuthentificated) {
      navigate("/sign-in");
    }
  }, [isAuthentificated, navigate]);

  return (
    <>
      <Helmet>
        <title>User Account</title>
      </Helmet>
      <UserAccountBanner userBanner={userBanner} userAvatar={userAvatar} />
      <Container>
        <UserAccountOptions userRole={userRole} />
      </Container>
    </>
  );
};

export default UserAccont;
