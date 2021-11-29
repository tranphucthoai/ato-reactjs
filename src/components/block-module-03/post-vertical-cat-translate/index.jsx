import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

PostVerticalCatTranslate.propTypes = {
    data: PropTypes.object
};
PostVerticalCatTranslate.defaultProps = {
    data: {}
};
function PostVerticalCatTranslate({ data }) {
    let match = useRouteMatch();
    return (
        <article className="post post--vertical post--vertical-cat-translate">
            <div className="post__thumb thumb-350 thumb-sm object-cover">
                <Link to={`${match.url}:${data?.dataId}`}>
                    <img src={data?.thumb} alt="" />
                </Link>
            </div>
            <div className="post__text inverse-text">
                <Link to={`${match.url}:${data?.dataId}`} className="post__cat text-uppercase post__cat-normal bg-primary">
                    {data?.categoryName}
                </Link>
                <h3 className="post__title f-32 f-w-700 mt-10">
                    <Link to={`${match.url}:${data?.dataId}`}>
                        {data?.title}
                    </Link>
                </h3>
                <div className="post__meta mt-15 flex-box">
                    <div className="post__author me-5 ">
                        <div className="post__author-text text-capitalize f-16">
                            <span className="op-08 f-16"> By </span>
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
        </article>
    );
}

export default PostVerticalCatTranslate;