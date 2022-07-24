import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";


function User (props) {

  let handleClickChange = () => {
    props.onActiveChange(props.id)
  }
  let handleClick = () => {
    props.onClick(props.id);
  };

  const qualities = props.qualities
  let qualitiesSpan = qualities.map(qualityItem => {
      return (
        <Qualitie
          key={qualityItem._id}
          quality={qualityItem.name}
          qualityColor={qualityItem.color} /> 
      )
    })
    
  return (
       <>     
        <tr key={props._id}>
          <td>{props.name}</td>
          <td>
              {qualitiesSpan}
          </td>
          <td>{props.profession}</td>
          <td>{props.meetings}</td>
          <td>/ {props.rate}</td>
          <td>
              <button className="btn btn-outline-secondary" onClick={handleClickChange}>
                <BookMark status={props.bookmark}/>
              </button>
          </td>
          <td><button type="button" className="btn btn-danger" onClick={handleClick}>Delete</button></td>
        </tr>
        </>
      )
    }

export default User

