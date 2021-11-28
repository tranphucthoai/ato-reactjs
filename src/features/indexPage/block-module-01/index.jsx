import PropTypes from 'prop-types';
import React from 'react';
import PostVerticalReverse from '../../../components/block-module-01/post-vertical-reverse';
import PostVeticalFullWidth from './../../../components/block-module-01/post-vertical-full-width/index';

BlockModule01.propTypes = {
    data: PropTypes.array.isRequired,
};
function BlockModule01({ data }) {
    return (
        <section className="section-block block-module-01">
            <div className="section-inner container-fullwidth">
                <div className="section-main">
                    <PostVeticalFullWidth data={data[0]} />
                </div>
                <div className="section-sub">
                    <ul className="posts-list flex-box flex-box-3i">
                        {
                            data?.slice(1).map((dataItem) => (
                                <li key={dataItem.dataId} className="list-item">
                                    <PostVerticalReverse data={dataItem} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div >
        </section >
    );
}

export default BlockModule01;