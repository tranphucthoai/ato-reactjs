import React from "react";
import PropTypes from "prop-types";
import { HeadingSub, PostOverlayNormal } from "../../../../components";

PostsRelative.propTypes = {
  data: PropTypes.array,
};

function PostsRelative({ data }) {
  return (
    <section className="section-block posts-relative">
      <HeadingSub hasContainer={true} headingText={"TOP TRENDING"} />
      <div className="section-inner container">
        <ul className="posts-list flex-box flex-box-3i flex-space-30">
          {data.map((item, index) => (
            <li key={item?.id || index} className="posts-item">
              <PostOverlayNormal data={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PostsRelative;
