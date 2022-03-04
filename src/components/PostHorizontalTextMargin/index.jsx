import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostHorizontalTextMargin.propTypes = {
  data: PropTypes.object,
};

PostHorizontalTextMargin.defaultProps = {
  data: {},
};

function PostHorizontalTextMargin({ data }) {
  return (
    <article className="post post--horizontal  post--horizontal-middle post--horizontal-reverse post--horizontal-text-margin">
      <div className="post__thumb thumb-size-270 object-cover">
        <Link to={useLinkSingle(data.id)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text inverse-text">
        <Link
          to={useLinkSingle(data.id)}
          className="post__cat text-uppercase post__cat-normal bg-primary"
        >
          {data?.categoryName}
        </Link>
        <h3 className="post__title f-46 f-w-700 mt-10">
          <Link to={useLinkSingle(data.id)}>{data?.title}</Link>
        </h3>
        <div className="post__meta mt-15 flex-box align-item-center">
          <div className="post__author me-7 post__author-normal flex-box author-thumb-50 align-item-center">
            <div className="post__author-thumb object-cover">
              <img src={data?.authorThumb} alt="" />
            </div>
            <div className="post__author-text text-capitalize f-16">
              <span className="op-07 f-16"> By </span>
              <Link to="/" className="f-w-700">
                {data?.authorName}
              </Link>
            </div>
          </div>
          <div className="post__time">
            <time
              className="time op-08 text-capitalize f-16"
              dateTime={data?.createAt}
              title={data?.createAt}
            >
              {" "}
              {data?.createAt?.slice(0, 10)}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostHorizontalTextMargin;
