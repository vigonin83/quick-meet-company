import React from "react";
import User from "./user";

const Users = ({users, onDelete, onClick}) => {

  let userRow = users.map((user) => (
      <User key={user._id}
            id={user._id} 
            name={user.name} 
            profession={user.profession.name} 
            qualities={user.qualities} 
            meetings={user.completedMeetings}
            rate={user.rate} 
            bookmark={user.bookmark}
            onClick={onDelete}
            onActiveChange={onClick}/>
    )
  )
  
  return (
  <>
   <table className="table">
     <thead>
       <tr>
         <th scope="col">Имя</th>
         <th scope="col">Качества</th>
         <th scope="col">Профессия</th>
         <th scope="col">Встретился, раз</th>
         <th scope="col">Оценка</th>
         <th scope="col">Избранное</th>
         <th scope="col"></th>
       </tr>
     </thead>
     <tbody>
      {userRow}
     </tbody>
   </table>
   </>
    )
 }

 export default Users
