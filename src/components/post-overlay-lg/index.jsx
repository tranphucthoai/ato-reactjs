import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

PostOverlayLg.propTypes = {
    data: PropTypes.object
};
PostOverlayLg.defaultProps = {
    data: {}
}

function PostOverlayLg({ data }) {
    let match = useRouteMatch();
    return (
        <article className="post post--overlay post--overlay-bottom post--overlay-lg">
            <div className="post__thumb object-cover">
                <Link to={`${match.url}:${data?.dataId}`}>
                    <img src={data?.thumb} alt="" />
                </Link>
            </div>
            <div className="post__text inverse-text">
                <div className="post__text-inner">
                    <Link to={`${match.url}:${data?.dataId}`} className="post__cat text-uppercase post__cat-normal bg-primary">
                        {data?.categoryName}
                    </Link>
                    <h3 className="post__title f-w-700 f-60">
                        {data?.title}
                    </h3>
                    <div className="post__meta mt-15 flex-box align-item-center">
                        <div
                            className="post__author me-7 post__author-normal flex-box author-thumb-50 align-item-center">
                            <div className="post__author-thumb object-cover">
                                <img src={data?.authorThumb} alt="" />
                            </div>
                            <div className="post__author-text text-capitalize f-16">
                                <span className="op-07 f-16"> By </span>
                                <Link to="/" className="f-w-700">
                                    {data?.authorName}
                                </Link>
                            </div>
                        </div>
                        <div className="post__time">
                            <time className="time op-08 text-capitalize f-16" dateTime={data?.createAt}
                                title={data?.createAt}> {data?.createAt?.slice(0, 10)}</time>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default PostOverlayLg;