import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostHorizontalXs.propTypes = {
  data: PropTypes.object.isRequired,
};

function PostHorizontalXs({ data }) {
  return (
    <article className="post post--horizontal post--horizontal-middle post--horizontal-sx">
      <div className="post__thumb thumb-size-80 object-cover me-10">
        <Link to={useLinkSingle(data.dataId)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text">
        <h3 className="post__title f-16 f-w-700 mt-10">
          <Link to={useLinkSingle(data.dataId)}>{data?.title}</Link>
        </h3>
        <div className="post__meta mt-5 flex-box">
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

export default PostHorizontalXs;
