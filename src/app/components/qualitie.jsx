import React from "react";


function Qualitie (props) {

    const getBadgeColor = () => {
      let classes = 'badge m-2 bg-'
      classes = classes + props.qualityColor
      return classes
    }
    
return (
    <span className={getBadgeColor()}>{props.quality}</span> 
  )
}

export default Qualitie