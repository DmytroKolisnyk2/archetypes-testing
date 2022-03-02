import React from "react";
import "./sectionTitle.scss"
 const sectionTitle=({title,text}) => {
  
    return (
       <div className={"sectionTitle_div"}>
           <h2 className={"sectionTitle_title"}>
             {title}
           </h2>
    <p className={"sectionTitle_text"}>{text}</p>
       </div>
    );
  }
  
  export default sectionTitle;