import React from "react";
import PropTypes from "prop-types";

PostsNavigation.propTypes = {};

function PostsNavigation(props) {
  return (
    <div className="posts-navigation-wrap">
      <div className="posts-navigation">
        <div className="posts-navigation__prev">
          <article className="post post-verticel">
            <div className="post__thumb object-cover">
              <a href="/">
                <img
                  src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Imported_Blog_Media/6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg?width=1024&height=683&name=6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-text">
              <div className="post__label-navigation">
                <a href="/">
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
                </a>
              </div>
              <h3 className="post__title f-18">
                <a href="/">Life Is What Happens When You’re Busy Making</a>
              </h3>
            </div>
          </article>
        </div>
        <div className="posts-navigation__next">
          <article className="post post-verticel">
            <div className="post__thumb object-cover">
              <img
                src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Imported_Blog_Media/6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg?width=1024&height=683&name=6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg"
                alt=""
              />
            </div>
            <div className="post-text">
              <div className="post__label-navigation">
                <a href="/">
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
                </a>
              </div>
              <h3 className="post__title f-18">
                <a href="/">Life Is What Happens When You’re Busy Making</a>
              </h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default PostsNavigation;
