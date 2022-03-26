import React from "react";
import FooterStyles from "./Footer.module.scss";
import instagramIcon from "../../images/icons/instagram.png";
import gitHubIcon from "../../images/icons/gitHub.png";
const SocialIcon = ({ link, bgColor, backgroundImg, width, height, top, props }) => {
  const colorPalette = {
    white: "#fff",
  };
  const socialIconsImg = {
    instagram: instagramIcon,
    gitHub: gitHubIcon,
  };
  const socialIconsLink = {
    instagramLink: "https://www.instagram.com/lia_prykh/",
    gitHubLink: "https://github.com/DmytroKolisnyk2/archetypes-testing",
  };

  return (
    <div className={FooterStyles.wrapper1Icons}>
      <h4 className={FooterStyles.subTextTitle}>{props}</h4>
      <a
        style={{
          backgroundColor: colorPalette[bgColor],
          backgroundImage: socialIconsLink[backgroundImg],
        }}
        className={FooterStyles.footerIconLink}
        href={socialIconsLink[link]}
      >
        <img
          style={{
            backgroundColor: colorPalette[bgColor],
            width: width,
            height: height,
            marginTop: top,
          }}
          className={FooterStyles.footerIconImg}
          src={socialIconsImg[backgroundImg]}
          alt=""
      />
      </a>
    </div>
  );
};

export default SocialIcon;
