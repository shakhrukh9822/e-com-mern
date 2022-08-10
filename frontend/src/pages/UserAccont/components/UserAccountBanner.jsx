import React from "react";
import { Container } from "components/Container";
import UserAccountModal from "./UserAccountModal";

const UserAccountBanner = ({ userBanner, userAvatar }) => {
  return (
    <div>
      <div className="w-[100%] h-[200px] lg:h-[300px] xxl:h-[350px] relative bg-slate-200 shadow-md drop-shadow-lg">
        {userBanner ? (
          <img
            className="w-[100%] h-[100%] opacity-90 object-cover"
            src={userBanner}
            alt="userBanner"
          />
        ) : (
          <div className="bg-gray-300 w-[100%] h-[100%]" />
        )}
      </div>
      <UserAccountModal />
      <Container extraClasses="relative -top-[115px] flex md:justify-start justify-center">
        <div className="rounded-full overflow-hidden w-[150px] h-[150px] shadow-xl drop-shadow-lg">
          <img src={userAvatar} alt="userAvatar" />
        </div>
      </Container>
    </div>
  );
};

export default UserAccountBanner;
