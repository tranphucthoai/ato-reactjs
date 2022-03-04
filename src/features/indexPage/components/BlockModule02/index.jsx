import PropTypes from "prop-types";
import React from "react";
import {
  HeadingMain,
  PostOverlayLg,
  PostHorizontalMd,
  PostOverlayMd,
} from "../../../../components";

BlockModule02.propTypes = {
  data: PropTypes.array.isRequired,
};

function BlockModule02({ data }) {
  return (
    <section className="section-block block-module-02">
      <HeadingMain hasContainer={true} headingText={" editor's choise"} />
      <div className="section-inner flex-box container-fullwidth">
        <div className="section-main">
          <PostOverlayLg data={data[0]} />
        </div>
        <div className="section-sub">
          <ul className="posts-list">
            {data.slice(1, 3).map((dataItem, index) => (
              <li key={dataItem?.dataId || index} className="list-item">
                <PostHorizontalMd data={dataItem} />
              </li>
            ))}
          </ul>
          <PostOverlayMd data={data[3]} />
        </div>
      </div>
    </section>
  );
}

export default BlockModule02;
