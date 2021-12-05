import React from 'react';
import PropTypes from 'prop-types';
import HeadingMain from '../../../components/module-heading-main';
import PostVerticalReverseThumbAside from '../../../components/post-vertical-reverse-thumb-aside';

ListingGridNoSidebar02.propTypes = {
    data: PropTypes.array
};
ListingGridNoSidebar02.defaultProps = {
    data: []
};
function ListingGridNoSidebar02({ data }) {
    return (
        <section className="section-block listing-grid-no-sidebar-02">
            <div className="container">
                <HeadingMain hasContainer={false} headingText={"EDITOR'S CHOISE"} />
                <div className="section-inner">
                    <ul className="posts-list flex-box flex-box-2i">
                        {
                            data.map(dataItem => (
                                <li key={dataItem.dataId} className="list-item">
                                    <PostVerticalReverseThumbAside data={dataItem} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ListingGridNoSidebar02;