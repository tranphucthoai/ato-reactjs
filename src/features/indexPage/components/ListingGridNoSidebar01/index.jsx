import React from "react";
import PropTypes from "prop-types";
import {
  HeadingMain,
  PostHorizontalXl,
  PostOverlayNormal,
} from "../../../../components";

ListingGridNoSidebar01.propTypes = {
  data: PropTypes.array,
};

function ListingGridNoSidebar01({ data = [] }) {
  return (
    <section className="section-block listing-grid-no-sidebar-01">
      <div className="container">
        <HeadingMain headingText={"TOP TRENDING"} />
        <div className="section-inner flex-box">
          <div className="section-main">
            <ul className="posts-list flex-box flex-space-40 flex-box-1i">
              {data.slice(0, 3).map((dataItem, index) => (
                <li key={dataItem?.dataId || index} className="list-item">
                  <PostHorizontalXl data={dataItem} />
                </li>
              ))}
            </ul>
          </div>
          <div className="section-sub">
            <ul className="posts-list flex-box flex-space-20 flex-box-1i">
              {data.slice(3, 5).map((dataItem, index) => (
                <li key={dataItem?.dataId || index} className="list-item">
                  <PostOverlayNormal data={dataItem} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListingGridNoSidebar01;
