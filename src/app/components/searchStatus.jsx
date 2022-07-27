import React from 'react';
import PropTypes from 'prop-types';

function SearchStatus({ length }) {
    const titleText =
        length > 4
            ? ' человек тусанут с тобой сегодня'
            : length === 1
                ? ' человек тусанет с тобой сегодня'
                : ' человека тусанут с тобой сегодня';

    if (length > 0) {
        return (
            <h2>
                <span className="badge bg-primary m-2 p-2">
                    {length + titleText}
                </span>
            </h2>
        );
    } else {
        return (
            <h2>
                <span className="badge bg-danger m-2">
                    Никто с тобой не тусанет
                </span>
            </h2>
        );
    }
}

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
