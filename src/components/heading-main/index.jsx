import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

HeadingMain.propTypes = {
    headingText: PropTypes.string,
    hasContainer: PropTypes.bool
};

HeadingMain.defaultProps = {
    headingText: 'Heading ',
    hasContainer: false
};

function HeadingMain({ hasContainer, headingText }) {
    return (
        <div className={clsx('section-heading', 'block-heading', 'block-heading-normal', hasContainer && 'container')}>
            <h4 className="block-heading__title f-36">
                {headingText}
            </h4>
        </div>
    );
}

export default HeadingMain;