import React from "react";
import { PropTypes } from "prop-types";

const Contacts = ({ datas, href = "" }) => {
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li className="text-white mr-4" key={data.id}>
            <a
              className="text-[18px] hover:text-red-700 transition hover:underline"
              href={`${href}${data.link}`}
            >
              {data.item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  datas: PropTypes.array,
  href: PropTypes.string,
};

export default Contacts;
