import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "./../../store";

PostVerticalReverseThumbAside.propTypes = {
  data: PropTypes.object,
};
PostVerticalReverseThumbAside.defaultProps = {};
function PostVerticalReverseThumbAside({ data }) {
  return (
    <article className="post post--vertical post--vertical-reverse-thumb-aside">
      <div className="post__content-group">
        <div className="post__meta inverse-text">
          <div className="post__readmore">
            <Link to={useLinkSingle(data.id)}>
              <span className="post__readmore-text f-16 f-w-400 me-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46.426"
                  height="46.427"
                  viewBox="0 0 46.426 46.427"
                >
                  <g
                    id="Group_19239"
                    data-name="Group 19239"
                    transform="translate(3193.173 -4335.393) rotate(45)"
                  >
                    <line
                      id="Line_425"
                      data-name="Line 425"
                      x1="20"
                      y2="20"
                      transform="translate(820.5 5313.5)"
                      fill="none"
                      stroke="#222222"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></line>
                    <line
                      id="Line_426"
                      data-name="Line 426"
                      x2="20"
                      y2="20"
                      transform="translate(840.5 5313.5)"
                      fill="none"
                      stroke="#222222"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></line>
                    <line
                      id="Line_427"
                      data-name="Line 427"
                      y2="40"
                      transform="translate(840.5 5313.5)"
                      fill="none"
                      stroke="#222222"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></line>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="post__thumb object-cover thumb-size-300">
          <Link to={useLinkSingle(data.id)}>
            <img src={data?.thumb} alt="" />
          </Link>
        </div>
      </div>
      <div className="post__text">
        <Link
          to={useLinkSingle(data.id)}
          className="post__cat text-uppercase f-w-500"
        >
          {data?.categoryName}
        </Link>
        <h3 className="post__title f-30 mt-10 mb-10">
          <Link to={useLinkSingle(data.id)}>{data?.title}</Link>
        </h3>
        <div className="post__meta flex-box">
          <div className="post__author me-5">
            <div className="post__author-text text-capitalize f-16">
              <span className="op-08 f-16"> By </span>
              <Link to="/" className="f-w-700" href="">
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

export default PostVerticalReverseThumbAside;
