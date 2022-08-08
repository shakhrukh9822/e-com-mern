import React from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";

// components
import { Container } from "components/Container";
import UserAccountBanner from "./components/UserAccountBanner";
import { IsAuthentificated } from "components/IsAuthentificated";
import UserAccountOptions from "./components/UserAccountOptions";

const UserAccont = () => {
  const { user } = useSelector(selectAuthedUser);

  const userAvatar = get(user, "avatar.url");
  const userBanner = get(user, "user_banner.url");
  const userRole = get(user, "role");

  return (
    <IsAuthentificated>
      <Helmet>
        <title>User Account</title>
      </Helmet>
      <UserAccountBanner userBanner={userBanner} userAvatar={userAvatar} />
      <Container>
        <UserAccountOptions userRole={userRole} />
      </Container>
    </IsAuthentificated>
  );
};

export default UserAccont;
