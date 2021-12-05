import React from 'react';
import PropTypes from 'prop-types';
import HeadingMain from '../../../components/heading-main';
import PostOverlayNormal from './../../../components/post-overlay-normal/index';
import PostHorizontalSx from './../../../components/post-horizontal-sx/index';

ListingGridHasSidebar.propTypes = {
    data: PropTypes.array.isRequired,
};

function ListingGridHasSidebar({ data }) {
    return (
        <section className="section-block listing-grid-has-sidebar-01">
            <div className="section-inner">
                <div className="container">
                    <div className="row flex-box">
                        <div className="main-col">
                            <HeadingMain headingText='LASTED NEWS' />
                            <ul className="posts-list flex-box flex-box-2i flex-space-30">
                                {
                                    data.slice(0, 7).map(dataItem => (
                                        <li key={dataItem.dataId} className="list-item">
                                            <PostOverlayNormal data={dataItem} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="sub-col">
                            <div className="widget">
                                <div className="widget__title widget__title-normal">
                                    <h4 className="widget__title-text f-20">
                                        TOP NEWS
                                    </h4>
                                </div>
                                <ul className="posts-list flex-space-30-0 line-item">
                                    {
                                        data.slice(7).map(dataItem => (
                                            <li key={dataItem.dataId} className="list-item">
                                                <PostHorizontalSx data={dataItem} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ListingGridHasSidebar;