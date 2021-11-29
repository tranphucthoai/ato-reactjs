import PropTypes from 'prop-types';
import React from 'react';
import ModuleHeadingMain from '../../../components/block-module-heading/module-heading-main';
import PostOverlayMd from './../../../components/block-module-02/module-02-overlay-md/index';
import PostHorizontalMd from './../../../components/block-module-02/post-horizontal-md/index';
import PostOverlayLg from './../../../components/block-module-02/post-overlay-lg/index';

BlockModule02.propTypes = {
    data: PropTypes.array.isRequired
};

function BlockModule02({ data }) {
    return (
        <section className="section-block block-module-02">
            <ModuleHeadingMain hasContainer={true} headingText={" editor's choise"} />
            <div className="section-inner flex-box container-fullwidth">
                <div className="section-main">
                    <PostOverlayLg data={data[0]} />
                </div>
                <div className="section-sub">
                    <ul className="posts-list">
                        {
                            data.slice(1, 3).map((dataItem) => (
                                <li key={dataItem.dataId} className="list-item">
                                    <PostHorizontalMd data={dataItem} />
                                </li>
                            ))
                        }
                    </ul>
                    <PostOverlayMd data={data[3]} />
                </div>
            </div>
        </section>
    );
}

export default BlockModule02;