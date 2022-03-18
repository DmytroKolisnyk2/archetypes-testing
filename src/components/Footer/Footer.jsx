import { useTranslation } from "react-i18next";
import { footer } from "../../translations/ua/common.json";
import React from "react";
import FooterStyles from "./Footer.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import SocialIcon from "./SocialIcon";
import path from "../../services/routerPath.json";
import { useMatch, Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
  const { t } = useTranslation();
  const isTestLink = useMatch(path.testLink);
  const isTest = useMatch(path.test);

  return (
    <div className={FooterStyles.FooterWrapper}>
      <footer id="footer" className={FooterStyles.footer}>
        <div className={FooterStyles.footerWrappers}>
          <div className={FooterStyles.footerTwoWrappers}>
            <div className={FooterStyles.sectionTitleDiv}>
              <Slide triggerOnce duration={1200}>
                <Fade triggerOnce cascade duration={1200}>
                  <h2 className={FooterStyles.footerTitle}>{t(footer.title)}</h2>
                  <p className={FooterStyles.footerSubText}>{t(footer.text)}</p>
                </Fade>
              </Slide>
            </div>
            <div className={FooterStyles.FooterButtonWrapper}>
              <Link className={FooterStyles.archetypesBtn} to={path.archetypes}>
                <Fade triggerOnce>
                  <Button
                    paddingRight={0}
                    paddingLeft={10}
                    width={170}
                    bgColor={"pink"}
                    color={"white"}
                  >
                    {t(footer.button1)}
                  </Button>
                </Fade>
              </Link>

              {!isTest && !isTestLink && (
                <Link to={path.testLink}>
                  <Fade triggerOnce>
                    <Button width={210} color="black" bgColor="white">
                      <span>{t(footer.button2)}</span>
                      <SvgArrow size={20} orientation="right" />
                    </Button>
                  </Fade>
                </Link>
              )}
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
          <p className={FooterStyles.footerText}>
            2022. All rights reserved. Created by GoITeens.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
