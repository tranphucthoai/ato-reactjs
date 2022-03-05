import React from "react";
import PropTypes from "prop-types";

AuthorVerticel.propTypes = {};

function AuthorVerticel(props) {
  return (
    <div className="author author-verticel">
      <div className="author__thumb"></div>
      <div className="author-text">
        <a href="/" className="author__name">
          ok
        </a>
        <time class="author__time" datetime="6 Mar 2019">
          6 Mar 2019
        </time>
      </div>
    </div>
  );
}

export default AuthorVerticel;
