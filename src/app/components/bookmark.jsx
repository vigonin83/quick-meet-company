import React from "react";

function BookMark ({status, ...rest}) { 

   let renderBookmarkIcon = (status) => {
    return status ? "bi bi-bookmark-star-fill" : "bi bi-bookmark-star"
   }
   return (
    <>
        <i className={renderBookmarkIcon(status)}></i>
    </>
   )
    
}

export default BookMark

