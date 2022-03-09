import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostVeticalFullWidth.propTypes = {
  data: PropTypes.object,
};

function PostVeticalFullWidth({ data = {} }) {
  return (
    <article className="post post--vertical post--vertical-fullwidth">
      <div className="post__thumb object-cover thumb-700 thumb-lg">
        <Link to={useLinkSingle(data.dataId)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text inverse-text text-center container">
        <Link
          className="post__cat text-uppercase post__cat-normal bg-primary"
          to={useLinkSingle(data.dataId)}
        >
          {data?.categoryName}
        </Link>
        <h3 className="post__title text-capitalize f-w-700 f-60 mt-15">
          <Link to={useLinkSingle(data.dataId)}>{data?.title}</Link>
        </h3>
        <div className="post__meta mt-15 flex-box justify-content-center">
          <div className="post__author me-5 ">
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
      </div>
    </article>
  );
}

export default PostVeticalFullWidth;
