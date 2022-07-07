import React from "react";
import Tippy from "@tippyjs/react";
import { FaTelegramPlane, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  const socials = [
    {
      id: 1,
      icon: <FaTelegramPlane />,
      title: "Telegram",
      link: "https://t.me/ShaxruhAtanazarov",
    },
    {
      id: 2,
      icon: <AiFillInstagram />,
      title: "Instagram",
      link: "https://www.instagram.com",
    },
    {
      id: 3,
      icon: <FaFacebookF />,
      title: "Facebook",
      link: "https://facebook.com",
    },
    {
      id: 4,
      icon: <FaTwitter />,
      title: "Twitter",
      link: "https://twitter.com",
    },
  ];

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
