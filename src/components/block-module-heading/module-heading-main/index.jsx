import React from 'react';
import PropTypes from 'prop-types';

ModuleHeadingMain.propTypes = {
    headingText: PropTypes.string
};

ModuleHeadingMain.defaultProps = {
    headingText: 'Heading '
};

function ModuleHeadingMain({ headingText }) {
    return (
        <div className="section-heading block-heading container block-heading-normal">
            <h4 className="block-heading__title f-36">
                {headingText}
            </h4>
        </div>
    );
}

export default ModuleHeadingMain;