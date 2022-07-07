import React from "react";

// components
import { Container } from "components/Container";
import { Logo } from "../Logo";
import MobileNavaBar from "./components/MobileNavaBar";
import NavBar from "./components/NavBar";
import NavOptions from "./components/NavOptions";

const Header = () => {
  return (
    <Container extraClasses={"py-2 flex justify-between h-[50px] items-center"}>
      <Logo color={"logoColor"} />
      <div className="flex items-center">
        <NavBar />
        <NavOptions />
      </div>
      <MobileNavaBar />
    </Container>
  );
};

export default Header;
