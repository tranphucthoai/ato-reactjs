import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

ModuleHeadingSub.propTypes = {
    headingText: PropTypes.string,
    hasContainer: PropTypes.bool
};

ModuleHeadingSub.defaultProps = {
    headingText: 'Heading',
    hasContainer: false
};

function ModuleHeadingSub({ hasContainer, headingText }) {
    return (
        <div className={clsx('section-heading', 'block-heading', 'block-heading-normal', hasContainer && 'container')}>
            <h4 className="block-heading__title f-36 color-white text-center">
                {headingText}
            </h4>
        </div>
    );
}

export default ModuleHeadingSub;