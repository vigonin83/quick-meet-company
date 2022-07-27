import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';
import PropTypes from 'prop-types';

function User({ id, name, profession, qualities, meetings, rate, bookmark, onClick, onActiveChange }) {
    // console.log(props)
    const handleClickChange = () => {
        onActiveChange(id);
    };
    const handleClick = () => {
        onClick(id);
    };

    const qualitiesSpan = qualities.map((qualityItem) => {
        return (
            <Qualitie
                key={qualityItem._id}
                quality={qualityItem.name}
                qualityColor={qualityItem.color}
            />
        );
    });

    return (
        <>
            <tr key={id}>
                <td>{name}</td>
                <td>{qualitiesSpan}</td>
                <td>{profession}</td>
                <td>{meetings}</td>
                <td>{rate} /5</td>
                <td>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={handleClickChange}
                    >
                        <BookMark status={bookmark} />
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleClick}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}
User.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    meetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onActiveChange: PropTypes.func.isRequired
};

export default User;
