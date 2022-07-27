import React from 'react';
import PropTypes from 'prop-types';

function Qualitie({ quality, qualityColor }) {
    const getBadgeColor = () => {
        let classes = 'badge m-2 bg-';
        classes = classes + qualityColor;
        return classes;
    };

    return <span className={getBadgeColor()}>{quality}</span>;
}
Qualitie.propTypes = {
    quality: PropTypes.string.isRequired,
    qualityColor: PropTypes.string.isRequired
};

export default Qualitie;
