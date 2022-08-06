import React from "react";
import Tippy from "@tippyjs/react";
import { socials } from "settings/socials";

const Socials = () => {
  return (
    <div>
      <ul className="flex items-center">
        {socials.map((social) => (
          <li key={social.id}>
            <Tippy content={social.title}>
              <div className="w-[40px] h-[40px] mr-2 border-white rounded-sm border-[1px]">
                <a
                  href={social.link}
                  target="blank"
                  className="text-[24px] text-white w-[100%] h-[100%] flex justify-center items-center hover:text-black hover:bg-white transition-all"
                >
                  {social.icon}
                </a>
              </div>
            </Tippy>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
