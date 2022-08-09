import React from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";

// components
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import ProfileInfos from "./components/ProfileInfos";
import LinkButton from "components/Buttons/LinkButton";
import { IsAuthentificated } from "components/IsAuthentificated";
import { GoBackButton } from "components/Buttons";

const Porfile = () => {
  const { user } = useSelector(selectAuthedUser);

  const userAvatar = get(user, "avatar.url");

  console.log(user);

  return (
    <IsAuthentificated>
      <Helmet>
        <title>{`${user.name}'s Profile`}</title>
      </Helmet>

      <Container extraClasses={"mt-10"}>
        <div className="flex justify-between items-center">
          <MainTitle title={"My Profile"} />
          <GoBackButton />
        </div>
        <div className="md:border mt-4 rounded-md md:p-5 xl:h-[60vh] flex gap-10 xl:gap-20 xl:flex-row flex-col mb-10">
          <div className="xl:w-[40%] shadow-xl drop-shadow-lg rounded-md border flex items-center justify-center flex-col p-4">
            <div className="w-[200px] h-[200px] rounded-full bg-slate-200 overflow-hidden shadow-lg drop-shadow-lg mt-10">
              <img
                className="w-[100%] h-[100%] object-cover rounded-full"
                src={userAvatar}
                alt="Avatar"
              />
            </div>
            <div className="mt-10 w-[100%] flex justify-center">
              <LinkButton title={"Edit Profile"} link={"/me/update"} />
            </div>
          </div>
          <div className="xl:w-[60%] shadow-xl drop-shadow-lg rounded-md border p-5 xl:p-10 flex flex-col justify-between">
            <ProfileInfos />
            <div className="flex mt-10 flex-col xl:flex-row ">
              <LinkButton
                title={"My Orders"}
                link={"/orders"}
                extraClasses={"xl:mr-4 mb-4 xl:mb-0"}
              />
              <LinkButton title={"Change Password"} link={"/password/update"} />
            </div>
          </div>
        </div>
      </Container>
    </IsAuthentificated>
  );
};

export default Porfile;
