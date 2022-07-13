import React from "react";
import { PropTypes } from "prop-types";

// components
import { Badge } from "components/Badge";

const CardBadges = ({ isNew, discauntPrecent }) => {
  return (
    <div className="absolute top-2 left-2">
      {isNew ? <Badge extraClass={"mr-2"} title={"New"} /> : null}
      {discauntPrecent ? (
        <Badge extraClass={"mr-2"} title={`-${discauntPrecent} %`} />
      ) : null}
    </div>
  );
};

CardBadges.propTypes = {
  isNew: PropTypes.bool,
  discauntPrecent: PropTypes.number,
};

CardBadges.defaultProps = {
  isNew: false,
  discauntPrecent: 0,
};

export default CardBadges;
