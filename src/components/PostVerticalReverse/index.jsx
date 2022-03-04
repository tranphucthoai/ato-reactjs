import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostVerticalReverse.propTypes = {
  data: PropTypes.object.isRequired,
};

function PostVerticalReverse({ data }) {
  return (
    <article className="post post--vertical post--vertical-reverse">
      <div className="post__meta inverse-text">
        <div className="post__readmore">
          <Link to={useLinkSingle(data.id)}>
            <span className="post__readmore-text f-16 f-w-400 me-5">
              Read More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="10.751"
              viewBox="0 0 25 10.751"
            >
              <path
                id="right-arrow"
                d="M.006,4.836a.54.54,0,0,0-.771,0,.544.544,0,0,0,0,.763L3.143,9.506h-22.6a.537.537,0,0,0-.539.54.543.543,0,0,0,.539.547h22.6l-3.907,3.9a.553.553,0,0,0,0,.771.54.54,0,0,0,.771,0l4.832-4.832a.531.531,0,0,0,0-.763Z"
                transform="translate(20 -4.674)"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="post__thumb thumb-350 thumb-sm object-cover">
        <Link to={useLinkSingle(data.id)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text inverse-text ">
        <Link
          className="post__cat text-uppercase f-12"
          to={useLinkSingle(data.id)}
        >
          {data?.categoryName}
        </Link>
        <h3 className="post__title f-32 f-w-700 mt-10 text-limit-2">
          <Link to={useLinkSingle(data.id)}>{data?.title}</Link>
        </h3>
        <div className="post__excerpt op-08 f-16 mt-14 text-limit-3">
          {data?.description}
        </div>
      </div>
    </article>
  );
}

export default PostVerticalReverse;
