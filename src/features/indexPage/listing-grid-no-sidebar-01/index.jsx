import React from 'react';
import PropTypes from 'prop-types';
import ModuleHeadingMain from '../../../components/block-module-heading/module-heading-main';
import PostHorizontalXl from './../../../components/listing-grid-no-sidebar-01/post-horizontal-xl/index';
import PostOverlayNormal from './../../../components/listing-grid-no-sidebar-01/post-overlay-normal/index';

ListingGridNoSidebar01.propTypes = {
    data: PropTypes.array
};
ListingGridNoSidebar01.defaultProps = {
    data: []
};

function ListingGridNoSidebar01({ data }) {
    return (
        <section className="section-block listing-grid-no-sidebar-01">
            <div className="container">
                <ModuleHeadingMain headingText={"TOP TRENDING"} />
                <div className="section-inner flex-box">
                    <div className="section-main">
                        <ul className="posts-list flex-box flex-space-40 flex-box-1i">
                            {
                                data.slice(0, 3).map((dataItem) => (
                                    <li key={dataItem.dataId} className="list-item">
                                        <PostHorizontalXl data={dataItem} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="section-sub">
                        <ul className="posts-list flex-box flex-space-20 flex-box-1i">
                            {
                                data.slice(3, 5).map((dataItem) => (
                                    <li key={dataItem.dataId} className="list-item">
                                        <PostOverlayNormal data={dataItem} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingGridNoSidebar01;