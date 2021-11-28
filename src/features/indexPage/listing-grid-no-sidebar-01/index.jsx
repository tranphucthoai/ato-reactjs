import React from 'react';
import PropTypes from 'prop-types';
import ModuleHeadingMain from '../../../components/block-module-heading/module-heading-main';

ListingGridNoSidebar01.propTypes = {

};

function ListingGridNoSidebar01(props) {
    return (
        <section class="section-block listing-grid-no-sidebar-01">
            <div class="container">
                <ModuleHeadingMain headingText={"TOP TRENDING"} />
                <div class="section-inner flex-box">
                    <div class="section-main">
                        <ul class="posts-list flex-box flex-space-40 flex-box-1i">
                            <li class="list-item">

                            </li>
                        </ul>
                    </div>
                    <div class="section-sub">
                        <ul class="posts-list flex-box flex-space-20 flex-box-1i">
                            <li class="list-item">
                                <article
                                    class="post post--overlay post--overlay-bottom post--overlay-normal post--overlay-darkness">
                                    <div class="post__thumb object-cover">
                                        <a href="">
                                            <img src="./images/img-12.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="post__text inverse-text overlay-420">
                                        <div class="post__text-inner">
                                            <a href="" class="post__cat text-uppercase post__cat-normal bg-primary">
                                                Fashion
                                            </a>
                                            <h3 class="post__title f-w-700 f-26 mt-10">
                                                I Was Trying To Daydream But My Mind Kept Wander.
                                            </h3>
                                            <div class="post__meta mt-15 flex-box">
                                                <div class="post__author me-5">
                                                    <div class="post__author-text text-capitalize f-16">
                                                        <span class="op-08 f-16"> By</span>
                                                        <a class="f-w-700" href="">Tran Phuc Thoai</a>
                                                    </div>
                                                </div>
                                                <div class="post__time">
                                                    <time class="time op-08 text-capitalize f-16"
                                                        datetime="March 6 2019" title="March 6 2019">March 6 2019</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="link-overlay" href="#"></a>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingGridNoSidebar01;