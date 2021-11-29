import React from 'react';
import PropTypes from 'prop-types';
import ModuleHeadingMain from '../../../components/block-module-heading/module-heading-main';
import PostVerticalReverseThumbAside from '../../../components/listing-grid-no-sidebar-02/post-vertical-reverse-thumb-aside';

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
                <ModuleHeadingMain hasContainer={false} headingText={"EDITOR'S CHOISE"} />
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