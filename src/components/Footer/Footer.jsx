import { useTranslation } from "react-i18next";
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
              <Slide triggerOnce duration={600}>
                <Fade triggerOnce cascade duration={600}>
                  <h2 className={FooterStyles.footerTitle}>{t("footer.title")}</h2>
                  <p className={FooterStyles.footerSubText}>{t("footer.text")}</p>
                  <p className={FooterStyles.footerSubText1}>{t("footer.span")}</p>
                </Fade>
              </Slide>
            </div>
            <Fade triggerOnce direction="right">
              <div className={FooterStyles.FooterButtonWrapper}>
                <Link className={FooterStyles.archetypesBtn} to={path.archetypes}>
                  <Fade triggerOnce>
                    <Button
                      paddingRight={35}
                      paddingLeft={35}
                      width={"auto"}
                      bgColor={"pink"}
                      color={"white"}
                    >
                      {t("footer.button1")}
                    </Button>
                  </Fade>
                </Link>

                {!isTest && !isTestLink && (
                  <Link to={path.testLink}>
                    <Fade triggerOnce>
                      <Button width={210} color="black" bgColor="white">
                        <span>{t("footer.button2")}</span>
                        <SvgArrow size={20} orientation="right" />
                      </Button>
                    </Fade>
                  </Link>
                )}
              </div>
            </Fade>
          </div>
          <Fade triggerOnce direction="up" cascade>
            <div className={FooterStyles.iconWrapper}>
              <SocialIcon
                link={"gitHubLink"}
                backgroundImg={"gitHub"}
                bgColor={"white"}
                width={77}
                height={77}
                props={t("footer.subtextIconGitHub")}
              ></SocialIcon>
              <SocialIcon
                link={"instagramLink"}
                backgroundImg={"instagram"}
                height={77}
                width={77}
                props={t("footer.subtextIconInstagram")}
              ></SocialIcon>
            </div>
            <p className={FooterStyles.footerText}>
              2022. All rights reserved. Created by GoITeens &#128155;
            </p>
          </Fade>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
