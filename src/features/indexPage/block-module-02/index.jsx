import PropTypes from 'prop-types';
import React from 'react';
import HeadingMain from '../../../components/heading-main';
import PostOverlayLg from '../../../components/post-overlay-lg/index';
import PostHorizontalMd from '../../../components/post-horizontal-md/index';
import PostOverlayMd from '../../../components/post-overlay-md/index';

BlockModule02.propTypes = {
    data: PropTypes.array.isRequired
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