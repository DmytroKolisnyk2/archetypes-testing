import React from "react";
import sectionTitleScss from "./sectionTitleScss.module.scss"
import PropTypes from 'prop-types';

 const sectionTitle=({title,text,top}) => {
  
    return (
       <div  style={{
 marginTop:top,
      }} className={sectionTitleScss.sectionTitleDiv}>
           <h2 className={sectionTitleScss.sectionTitleTitle}>
             {title}
           </h2>
    <p className={sectionTitleScss.sectionTitleText}>{text}</p>
       </div>
    );
  }
  
  sectionTitle.propTypes = {
   title: PropTypes.string,
   text: PropTypes.string
 };

  export default sectionTitle;