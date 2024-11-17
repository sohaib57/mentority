import React from "react";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";

import Coin from "../../assets/images/pricing/coin.webp";
import CoinGif from "../../assets/video/coins-background.mp4";
import ReactPlayer from "react-player";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <Element id="pricing">
    <div className="pricing">
      <div className="pricing-left">
        <span className="team-heading">{t("pricing-lg")}</span>
        <span className="pricing-left-mainhead mainHeading">
        {t("pricing-des-lg")}
        </span>
        <span className="pricing-left-subpara blackpara">
        {t("pricing-detail-lg")}
        </span>
      </div>
      <div className="pricing-right">
        <img src={Coin} />
        <div className="pricing-right-image" >
            <ReactPlayer
                className="pricing-right-image-video"
                url={CoinGif}
                playsinline={true}
                width={"auto"}
                height={"auto"}
                loop
                muted
                playing
            />
        </div>
      </div>
    </div>
    </Element>
  );
}
