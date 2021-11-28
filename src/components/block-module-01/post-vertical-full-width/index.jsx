import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

PostVeticalFullWidth.propTypes = {
    data: PropTypes.object
};

PostVeticalFullWidth.defaultProps = {
    data: {}
}

function PostVeticalFullWidth({ data }) {
    let match = useRouteMatch();
    return (
        <article className="post post--vertical post--vertical-fullwidth">
            <div className="post__thumb object-cover thumb-700 thumb-lg">
                <Link to={`${match.url}:${data?.dataId}`}>
                    <img
                        src={data?.thumb}
                        alt="" />
                </Link>
            </div>
            <div className="post__text inverse-text text-center container">
                <Link className="post__cat text-uppercase post__cat-normal bg-primary" to={`${match.url}:${data?.dataId}`}>
                    {
                        data?.categoryName
                    }
                </Link>
                <h3 className="post__title text-capitalize f-w-700 f-60 mt-15">
                    <Link to={`${match.url}:${data?.dataId}`}>
                        {data?.title}
                    </Link>
                </h3>
                <div className="post__meta mt-15 flex-box justify-content-center">
                    <div className="post__author me-5 ">
                        <div className="post__author-text text-capitalize f-16">
                            <span className="op-08 f-16"> By </span>
                            <a className="f-w-700" href="">{
                                data?.authorName
                            }</a>
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

export default PostVeticalFullWidth;