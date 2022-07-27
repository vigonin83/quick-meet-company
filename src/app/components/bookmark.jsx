import React from 'react';
import PropTypes from 'prop-types';

function BookMark({ status, ...rest }) {
    const renderBookmarkIcon = (status) => {
        return status ? 'bi bi-bookmark-star-fill' : 'bi bi-bookmark-star';
    };
    return (
        <>
            <i className={renderBookmarkIcon(status)}></i>
        </>
    );
}

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default BookMark;
