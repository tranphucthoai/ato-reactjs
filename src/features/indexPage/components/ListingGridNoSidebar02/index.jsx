import React from "react";
import PropTypes from "prop-types";
import {
  HeadingMain,
  PostVerticalReverseThumbAside,
} from "../../../../components";

ListingGridNoSidebar02.propTypes = {
  data: PropTypes.array,
};
ListingGridNoSidebar02.defaultProps = {
  data: [],
};
function ListingGridNoSidebar02({ data }) {
  return (
    <section className="section-block listing-grid-no-sidebar-02">
      <div className="container">
        <HeadingMain hasContainer={false} headingText={"EDITOR'S CHOISE"} />
        <div className="section-inner">
          <ul className="posts-list flex-box flex-box-2i">
            {data.map((dataItem, index) => (
              <li key={dataItem?.dataId || index} className="list-item">
                <PostVerticalReverseThumbAside data={dataItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ListingGridNoSidebar02;
