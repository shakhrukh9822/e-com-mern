import React from "react";
import Tippy from "@tippyjs/react";

// components
import { Container } from "components/Container";
import { Logo } from "../Logo";

// icons
import { FaGooglePlay } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import Contacts from "./components/Contacts";
import Socials from "./components/Socials";

const Footer = () => {
  const phones = [
    { id: 1, item: "99 899 960 98 22", link: "99 899 960 98 22" },
    { id: 2, item: "99 899 960 98 22", link: "99 899 960 98 22" },
    { id: 3, item: "99 899 960 98 22", link: "99 899 960 98 22" },
  ];
  const emails = [
    { id: 1, item: "example@example.com", link: "example@example.com" },
  ];

  const locations = [
    {
      id: 1,
      item: "Abu Hayot 67",
      link: "https://goo.gl/maps/KKYFn2Nb79LhRiUv7",
    },
  ];

  return (
    <footer className="mt-auto bg-footerBgColor md:mb-[0px] mb-[50px]">
      <Container extraClasses={"py-5"}>
        <div className="flex justify-between items-center mb-2">
          <div className="">
            <Logo color={"white"} />
          </div>
          <div className="text-white">
            <div className="flex justify-end">
              <li className="w-[40px] h-[40px] mr-3">
                <Tippy content={"GooglePlay"}>
                  <div>
                    <a
                      className="border w-[100%] h-[100%] inline-block p-3 hover:bg-white rounded-sm hover:text-textColor transition-all "
                      href="https://www.googleplay.com"
                      target="blank"
                    >
                      <FaGooglePlay />
                    </a>
                  </div>
                </Tippy>
              </li>
              <li className="w-[40px] h-[40px]">
                <Tippy content={"App Store"}>
                  <div>
                    <a
                      className="border w-[100%] h-[100%] inline-block p-3 hover:bg-white rounded-sm hover:text-textColor transition-all "
                      href="https://www.appstore.com"
                      target="blank"
                    >
                      <SiAppstore />
                    </a>
                  </div>
                </Tippy>
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mr-4">
            <span
              className="text-white font-semibold text-[24px]"
              style={{ letterSpacing: 0.8 }}
            >
              Contact us:
            </span>
            <div className="w-[100%] flex justify-between">
              <div className="flex flex-col md:flex-row">
                <Contacts datas={phones} href={"tel:"} />
                <Contacts datas={emails} href={"mailto:"} />
                <Contacts datas={locations} />
              </div>
            </div>
          </div>
          <div className="">
            <span
              className="text-white font-semibold text-[24px]"
              style={{ letterSpacing: 0.8 }}
            >
              Socials:
            </span>
            <Socials />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
