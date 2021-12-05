import React from 'react';
import PropTypes from 'prop-types';
import HeadingMain from '../../../components/module-heading-main';
import BlockSliderDefault from '../../../components/block-slider';

BlockSlider01.propTypes = {
    data: PropTypes.array

};
BlockSlider01.defaultProps = {
    data: []
};

function BlockSlider01({ data }) {
    return (
        <>
            <section className="section-block block-slider-01">
                <HeadingMain hasContainer={true} headingText={"FEATURED NEWS"} />
                <div className="section-inner container-fullwidth">
                    <div className="section-main">
                        <div className="container">
                            <BlockSliderDefault data={data} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlockSlider01;