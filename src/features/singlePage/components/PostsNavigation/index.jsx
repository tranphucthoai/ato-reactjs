import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLinkSingle } from "../../../../store";

PostsNavigation.propTypes = {
  data: PropTypes.object,
};

function PostsNavigation({ data = {} }) {
  const linkPrev = useLinkSingle(data.prev.id);
  const linkNext = useLinkSingle(data.next.id);
  return (
    <div className="posts-navigation-wrap">
      <div className="posts-navigation">
        {Object.keys(data.prev).length === 0 ? (
          ""
        ) : (
          <div className="posts-navigation__prev">
            <article className="post post-verticel">
              <div className="post__thumb object-cover">
                <Link to={linkPrev}>
                  <img src={data.prev.thumb} alt="" />
                </Link>
              </div>
              <div className="post-text">
                <div className="post__label-navigation">
                  <Link to={linkPrev}>
                    <span>prev</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.999"
                      height="6.545"
                      viewBox="0 0 11.999 6.545"
                    >
                      <path
                        id="XMLID_27_"
                        d="M.545,78.818h9.591l-1.8,1.8a.545.545,0,1,0,.771.771l2.727-2.727a.545.545,0,0,0,0-.771L9.112,75.16a.545.545,0,1,0-.771.771l1.8,1.8H.545a.545.545,0,1,0,0,1.091Z"
                        transform="translate(0 -75)"
                        fill="#222"
                        opacity="0.8"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <h3 className="post__title f-18">
                  <Link to={linkPrev}>{data.prev.title}</Link>
                </h3>
              </div>
            </article>
          </div>
        )}
        {Object.keys(data.next).length === 0 ? (
          ""
        ) : (
          <div className="posts-navigation__next">
            <article className="post post-verticel">
              <div className="post__thumb object-cover">
                <Link to={linkNext}>
                  <img src={data.next.thumb} alt="" />
                </Link>
              </div>
              <div className="post-text">
                <div className="post__label-navigation">
                  <Link to={linkNext}>
                    <span>next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.999"
                      height="6.545"
                      viewBox="0 0 11.999 6.545"
                    >
                      <path
                        id="XMLID_27_"
                        d="M.545,78.818h9.591l-1.8,1.8a.545.545,0,1,0,.771.771l2.727-2.727a.545.545,0,0,0,0-.771L9.112,75.16a.545.545,0,1,0-.771.771l1.8,1.8H.545a.545.545,0,1,0,0,1.091Z"
                        transform="translate(0 -75)"
                        fill="#222"
                        opacity="0.8"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <h3 className="post__title f-18">
                  <Link to={linkNext}>{data.next.title}</Link>
                </h3>
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostsNavigation;
