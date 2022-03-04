import PropTypes from "prop-types";
import React from "react";
import {
  PostVerticalFullWidth,
  PostVerticalReverse,
} from "../../../../components";

BlockModule01.propTypes = {
  data: PropTypes.array.isRequired,
};
function BlockModule01({ data }) {
  return (
    <section className="section-block block-module-01">
      <div className="section-inner container-fullwidth">
        <div className="section-main">
          <PostVerticalFullWidth data={data[0]} />
        </div>
        <div className="section-sub">
          <ul className="posts-list flex-box flex-box-3i">
            {data?.slice(1).map((dataItem, index) => (
              <li key={dataItem?.dataId || index} className="list-item">
                <PostVerticalReverse data={dataItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlockModule01;
