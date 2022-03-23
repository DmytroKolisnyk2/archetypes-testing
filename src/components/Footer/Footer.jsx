import { useTranslation } from "react-i18next";
import { footer } from "../../translations/ua/common.json";
import React from "react";
import FooterStyles from "./Footer.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import SocialIcon from "./SocialIcon";
import path from "../../services/routerPath.json";
import { useMatch, Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const isTest = useMatch(path.test);
  return (
    <div className={FooterStyles.FooterWrapper}>
      <footer className={FooterStyles.footer}>
        <div className={FooterStyles.footerWrappers}>
          <div className={FooterStyles.footerTwoWrappers}>
            <div className={FooterStyles.sectionTitleDiv}>
              <h2 className={FooterStyles.footerTitle}>{t(footer.title)}</h2>
              <p className={FooterStyles.footerSubText}>{t(footer.text)}</p>
              <p className={FooterStyles.footerSubText1}>{t(footer.span)}</p>
            </div>
            <div className={FooterStyles.FooterButtonWrapper}>
              <Link className={FooterStyles.archetypesBtn} to={path.archetypes}>
                <Button
                  // margin={"0 auto 32px"}
                  paddingRight={15}
                  paddingLeft={25}
                  width={170}
                  bgColor={"pink"}
                  color={"white"}
                >
                  {t(footer.button1)}
                </Button>
              </Link>

              {!isTest && (
                <Link to={path.block1}>
                  <Button width={210} color="black" bgColor="white">
                    <span>{t(footer.button2)}</span>
                    <SvgArrow size={20} orientation="right" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className={FooterStyles.iconWrapper}>
   
    <SocialIcon link={"gitHubLink"} backgroundImg={"gitHub"} bgColor={'white'} width={77} height={77} props={t(footer.subtextIconInstagram)}></SocialIcon>
    <SocialIcon link={"instagramLink"} backgroundImg={"instagram"} height={77} width={77}  props={t(footer.subtextIconGitHub)}></SocialIcon>
    </div>
          <p className={FooterStyles.footerText}>
            {" "}
            2022. All rights reserved. Created by GoITeens.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
