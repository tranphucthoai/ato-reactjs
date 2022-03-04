import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostOverlayMd.propTypes = {
  data: PropTypes.object,
};
PostOverlayMd.defaultProps = {
  data: {},
};
function PostOverlayMd({ data }) {
  return (
    <article className="post post--overlay post--overlay-bottom post--overlay-md">
      <div className="post__thumb object-cover">
        <Link to={useLinkSingle(data.id)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text inverse-text overlay-420">
        <div className="post__text-inner">
          <Link
            to={useLinkSingle(data.id)}
            className="post__cat text-uppercase post__cat-normal bg-primary"
          >
            {data?.categoryName}
          </Link>
          <h3 className="post__title f-w-700 f-32 mt-10">{data?.title}</h3>
          <div className="post__meta mt-15 flex-box">
            <div className="post__author me-5">
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
      </div>
    </article>
  );
}

export default PostOverlayMd;
