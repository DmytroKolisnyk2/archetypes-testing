import React from "react";
import PropTypes from "prop-types";
import FooterStyles from "./Footer.module.scss"
const SocialIcon = ({link,bgColor,backgroundImg,width,height,top}) => {
    const colorPalette = {
        blue: "#3a5794", 
        purple: "#82459a",
        black:"#222"
      };
      const socialIconsImg = {
        facebook:"https://dmytrokolisnyk2.github.io/ubermensches_project/build/images/team_facebook.png",
        instagram:"https://dmytrokolisnyk2.github.io/ubermensches_project/build/images/team_instamgram.png",
        gitHub:"https://dmytrokolisnyk2.github.io/ubermensches_project/build/images/team_github.png"
      };
      const socialIconsLink= {
        facebookLink:"https://www.facebook.com/GoITeens",
        instagramLink:"https://www.instagram.com/go_iteens/",
        gitHubLink:"https://github.com/DmytroKolisnyk2/archetypes-testing"
      };
     
      return (
        <a style={{
            backgroundColor: colorPalette[bgColor],
            backgroundImage: socialIconsLink[backgroundImg],
        }} className={FooterStyles.footerIconLink} href={socialIconsLink[link]}><img style={{
          backgroundColor: colorPalette[bgColor],
          width:width,
          height:height,
          marginTop: top,
      }}  className={FooterStyles.footerIconImg} src={socialIconsImg[backgroundImg]}></img></a>
          );
    };
    
    
  
    
    export default SocialIcon;