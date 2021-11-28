import React from 'react';
import PropTypes from 'prop-types';


PostHorizontalXl.propTypes = {
    data: PropTypes.object
};
PostHorizontalXl.defaultProps = {
    data: {}
};

function PostHorizontalXl({ data }) {
    return (
        <article class="post post--horizontal post--horizontal-xl">
            <div class="post__thumb thumb-size-270 object-cover">
                <a href="">
                    <img src={data?.thumb} alt="" />
                </a>
            </div>
            <div class="post__text">
                <a href="" class="post__cat text-uppercase f-w-500">
                    Fashion
                </a>
                <h3 class="post__title f-24 f-w-700 mt-10 text-limit-2">
                    <a href="">
                        Life Is What Happens When You’re Busy Making
                    </a>
                </h3>
                <div class="post__meta mt-15 flex-box">
                    <div class="post__author me-5 op-08">
                        <div class="post__author-text text-capitalize f-16">
                            <span class="op-08 f-16"> By</span>
                            <a class="f-w-700" href="">Tran Phuc Thoai</a>
                        </div>
                    </div>
                    <div class="post__time">
                        <time class="time op-08 text-capitalize f-16" datetime="March 6 2019"
                            title="March 6 2019">March 6 2019</time>
                    </div>
                </div>
                <div class="post__excerpt text-limit-2 f-16 op-08 mt-20">
                    <p>
                        Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s
                        offering lots of extra...
                    </p>
                </div>
            </div>
        </article>
    );
}

export default PostHorizontalXl;