import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

SocialVertical.propTypes = {
  data: PropTypes.array,
};

function SocialVertical({ data = [] }) {
  return (
    <ul className="social-vertical-list line-separate">
      {data.map((item) => (
        <li key={item.name} className="social-vertical-item">
          <a href={item.link}>
            <i
              className={clsx(
                "fa",
                item.name === "facebook"
                  ? "fa-facebook"
                  : item.name === "twitter"
                  ? "fa-twitter"
                  : "fa-linkedin"
              )}
            ></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialVertical;
