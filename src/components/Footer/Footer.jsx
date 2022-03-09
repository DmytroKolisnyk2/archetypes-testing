import { useTranslation } from "react-i18next";
import { footer } from "../../translations/ua/common.json";
import React from "react";
import FooterStyles from "./Footer.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import SocialIcon from "./SocialIcon";
import path from "../../services/routerPath.json";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerWrappers}>
        <div className={FooterStyles.footerTwoWrappers}>
          <div className={FooterStyles.sectionTitleDiv}>
            <h2 className={FooterStyles.footerTitle}>{t(footer.title)}</h2>
            <p className={FooterStyles.footerSubText}>{t(footer.text)}</p>
          </div>
          <div className={FooterStyles.FooterButtonWrapper}>
            <Link className={FooterStyles.archetypesBtn} to={path.archetypes}>
              <Button
                // margin={"0 auto 32px"}
                paddingRight={0}
                paddingLeft={10}
                width={170}
                bgColor={"pink"}
                color={"white"}
              >
                {t(footer.button1)}
              </Button>
            </Link>

            {/* <div className={FooterStyles.footerButton2Wrapper}> */}
            {path.test !== pathname && (
              <Link to={path.test}>
                <Button width={220} color="black" bgColor="white">
                  <span>{t(footer.button2)}</span>
                  <SvgArrow size={20} orientation="right" />
                </Button>
              </Link>
            )}
            {/* </div> */}
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
