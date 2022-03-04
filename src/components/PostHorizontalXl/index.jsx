import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostHorizontalXl.propTypes = {
  data: PropTypes.object,
};
PostHorizontalXl.defaultProps = {
  data: {},
};

function PostHorizontalXl({ data }) {
  return (
    <article className="post post--horizontal post--horizontal-xl">
      <div className="post__thumb thumb-size-270 object-cover">
        <Link to={useLinkSingle(data.id)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text">
        <Link
          to={useLinkSingle(data.id)}
          className="post__cat text-uppercase f-w-500"
        >
          {data?.categoryName}
        </Link>
        <h3 className="post__title f-24 f-w-700 mt-10 text-limit-2">
          <Link to={useLinkSingle(data.id)}>{data?.title}</Link>
        </h3>
        <div className="post__meta mt-15 flex-box">
          <div className="post__author me-5 op-08">
            <div className="post__author-text text-capitalize f-16">
              <span className="op-08 f-16"> By </span>
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
        <div className="post__excerpt text-limit-2 f-16 op-08 mt-20">
          <p>{data?.description}</p>
        </div>
      </div>
    </article>
  );
}

export default PostHorizontalXl;
