import React from 'react';
import PropTypes from 'prop-types';
import ModuleHeadingMain from '../../../components/block-module-heading/module-heading-main';
import BlockSliderDefault from '../../../components/block-slider-01/block-slider-01/block-slider';

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
                <ModuleHeadingMain headingText={"FEATURED NEWS"} />
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