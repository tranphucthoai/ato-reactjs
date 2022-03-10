import PropTypes from "prop-types";
import React from "react";

AuthorVerticel.propTypes = {
  data: PropTypes.object,
};

function AuthorVerticel({ data: { thumb, name, time } }) {
  return (
    <div className="author author-verticel">
      <div className="author__thumb">
        <img src={thumb} alt="" />
      </div>
      <div className="author-text">
        <a href="/" className="author__name f-16">
          {name}
        </a>
        <time className="author__time f-14" dateTime="6 Mar 2019">
          {time?.slice(0, 10)}
        </time>
      </div>
    </div>
  );
}

export default AuthorVerticel;
