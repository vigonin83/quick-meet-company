import React, { useState } from "react";
import api from '../api'


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
   
    const handleDelete = (userId) => {
      setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = (number) => {
      let numberOfUsers = users.length
      console.log(numberOfUsers)
      const titleText = 'человек тусанет с тобой'
          return (
          <h1 className="badge bg-primary m-2 p-2">{titleText}</h1>
        ) 
    }
    return (
    <>
    {renderPhrase()}
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
       
        {
          users.map(user => {
            return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.qualities.map(quality => {

                const getBadgeColor = () => {
                  let classes = 'badge m-2 bg-'
                  classes = classes + quality.color
                  return classes
                }

                return <span key = {quality._id} className = {getBadgeColor()}>{quality.name}</span> 
              })}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td><button type="button" className="btn btn-danger" onClick = {() => handleDelete(user._id)}>Delete</button></td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
    )
}

export default Users