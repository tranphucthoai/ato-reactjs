import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostHorizontalMd.propTypes = {
  data: PropTypes.object,
};
PostHorizontalMd.defaultProps = {
  data: {},
};
function PostHorizontalMd({ data }) {
  return (
    <article className="post post--horizontal post--horizontal-md bg-primary">
      <div className="post__thumb object-cover">
        <Link to={useLinkSingle(data.id)}>
          <img src={data?.thumb} alt="" />
        </Link>
      </div>
      <div className="post__text flex-box inverse-text">
        <div className="post__text-inner flex-item-auto">
          <Link
            to={useLinkSingle(data.id)}
            className="post__cat text-uppercase f-w-500"
          >
            {data?.categoryName}
          </Link>
          <h3 className="post__title f-22 f-w-700 mt-10 text-limit-2">
            <Link to={useLinkSingle(data.id)}>{data?.title}</Link>
          </h3>
          <div className="post__meta mt-15 flex-box">
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
        <div className="post__text-inner">
          <div className="post__readmore">
            <Link to={useLinkSingle(data.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="16.364"
                viewBox="0 0 30 16.364"
              >
                <path
                  id="XMLID_27_"
                  d="M1.364,84.546H25.344l-4.49,4.49a1.364,1.364,0,1,0,1.928,1.928L29.6,84.146a1.364,1.364,0,0,0,0-1.928L22.782,75.4a1.364,1.364,0,1,0-1.928,1.928l4.49,4.49H1.364a1.364,1.364,0,1,0,0,2.727Z"
                  transform="translate(0 -75)"
                  fill="#fff"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostHorizontalMd;
