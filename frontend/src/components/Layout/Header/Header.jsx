import React, { useRef, useEffect } from "react";

// components
import { Logo } from "../Logo";
import NavBar from "./components/NavBar";
import NavOptions from "./components/NavOptions";
import { Container } from "components/Container";
import MobileNavaBar from "./components/MobileNavaBar";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <>
      <header
        className="header fixed h-[60px] w-[100%] z-50 transition-all"
        ref={headerRef}
      >
        <Container extraClasses={"py-2"}>
          <div className="flex justify-between h-[50px] items-center">
            <Logo color={"white"} />
            <div className="flex items-center">
              <NavBar />
              <NavOptions />
            </div>
          </div>
        </Container>
      </header>
      <MobileNavaBar />
    </>
  );
};

export default Header;
