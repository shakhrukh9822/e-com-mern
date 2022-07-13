import React from "react";
import PropTypes from "prop-types";

import userDefaultIcon from "assets/images/user_default_icon/default_user-icon.png";
import { get } from "lodash";
import { Stars } from "components/Stars";

const ReviewCard = ({ review }) => {
  const avatar = get(review, "avatar", userDefaultIcon);
  const name = get(review, "name", "user name");
  const rating = get(review, "rating", 0);
  const comment = get(review, "comment", "user comment");

  console.log(review);
  return (
    <div
      className="p-2 sm:min-w-[350px] sm:max-w-[350px] min-w-[300px] max-w-[300px] rounded-md"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <div className="flex justify-between">
        <div
          className="user-avatar w-[56px] h-[56px] pb-4 rounded-full overflow-hidden relative"
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        />{" "}
        <Stars rating={rating} />
      </div>
      <div className="text-[16px] border my-2 py-1 px-2 rounded-md h-[110px]">
        {comment}
      </div>
      <h1 className="text-[24px] capitalize">Reviewer: {name}</h1>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

ReviewCard.defaultProps = {
  review: {},
};

export default ReviewCard;
