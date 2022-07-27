import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        const newStateUsers = users.filter((user) => user._id !== userId);
        setUsers(newStateUsers);
    };

    const handleToggleBookmark = (id) => {
        const favoriteUsers = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(favoriteUsers);
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onClick={handleToggleBookmark}
            />
        </>
    );
}

export default App;
