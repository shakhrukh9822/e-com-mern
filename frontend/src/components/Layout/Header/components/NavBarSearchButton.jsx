import React from "react";

// components
import { NavOptionsButton } from "components/Buttons";
import { SearchField } from "components/SearchField";
import { Container } from "components/Container";
import { useState } from "react";
// icons
import { CgSearch } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

const NavBarSearchButton = () => {
  const [isSearchformActive, setIsSearchformActive] = useState(false);

  return (
    <div className="flex">
      <NavOptionsButton type={"button"}>
        <CgSearch
          size={24}
          onClick={() => setIsSearchformActive(!isSearchformActive)}
        />
      </NavOptionsButton>
      <div
        style={{
          visibility: `${isSearchformActive ? "visible" : "hidden"}`,
        }}
        className={`absolute top-[60px] py-2 left-0 z-40 w-[100%] bg-slate-50 shadow-xl transition-all
        ${isSearchformActive ? "opacity-100" : "opacity-0"}
        `}
      >
        <Container extraClasses={"flex items-center justify-between"}>
          <VscChromeClose
            size={24}
            className={
              "cursor-pointer w-[28px] h-[28px] border transition-all border-stone-50 hover:border-stone-800 rounded-sm"
            }
            onClick={() => setIsSearchformActive(false)}
          />
          <div className="w-[50%]">
            <SearchField />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBarSearchButton;
