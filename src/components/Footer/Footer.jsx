import { useTranslation } from "react-i18next";
import { footer } from "../../translations/ua/common.json";
import React from "react";
import FooterStyles from "./Footer.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerWrappers}>
        <div className={FooterStyles.footerTwoWrappers}>
          <div className={FooterStyles.sectionTitleDiv}>
            <h2 className={FooterStyles.footerTitle}>{t(footer.title)}</h2>
            <p className={FooterStyles.footerSubText}>{t(footer.text)}</p>
          </div>
          <div className={FooterStyles.FooterButtonWrapper}>
            <Button
              margin={"0 auto 32px"}
              paddingRight={5}
              paddingLeft={5}
              width={170}
              bgColor={"pink"}
              color={"white"}
            >
              <p className={FooterStyles.footerButtonText1}>{t(footer.button1)}</p>
            </Button>
            <Button
              margin={"0 auto 32px"}
              // paddingLeft={29}
              // paddingRight={76}
              width={210}
              bgColor={"white"}
              color={"black"}
            >
              {/* <div className={FooterStyles.footerButton2Wrapper}> */}
                <p className={FooterStyles.footerButtonText2}>{t(footer.button2)}</p>
                <SvgArrow size={20} orientation="right" />
              {/* </div> */}
            </Button>
          </div>
        </div>
        <div className={FooterStyles.iconWrapper}>
          <SocialIcon
            link={"facebookLink"}
            backgroundImg={"facebook"}
            bgColor={"blue"}
            width={12}
            top={13}
          ></SocialIcon>
          <SocialIcon
            link={"gitHubLink"}
            backgroundImg={"gitHub"}
            bgColor={"black"}
            width={30}
            top={10}
          ></SocialIcon>
          <SocialIcon
            link={"instagramLink"}
            backgroundImg={"instagram"}
            bgColor={"purple"}
            top={12}
            width={40}
          ></SocialIcon>
        </div>
        <p className={FooterStyles.footerText}> 2022. All rights reserved. Created by GoITeens.</p>
      </div>
    </footer>
  );
};
export default Footer;
