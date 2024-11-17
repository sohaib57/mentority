import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from 'react-scroll';

import StartUpImage from "../../assets/images/timeline/startup2.webp";
import StrateicImage from "../../assets/images/timeline/strategic2.webp";
import FundImage from "../../assets/images/timeline/fund2.webp";
import DevelopmentImage from "../../assets/images/timeline/development2.webp";
import MobAppImage from "../../assets/images/timeline/mobile-application2.webp";
import PlatformImage from "../../assets/images/timeline/platform2.webp";
import PartnershipImage from "../../assets/images/timeline/partnership2.webp";
import TimeLineGifRight from "../../assets/images/gifs/lines-rotate-right.gif";
import TimeLineGifLeft from "../../assets/images/gifs/lines-rotate.gif";
import { Timeline } from "antd";
export default function TimeLine() {
  const { t } = useTranslation();

  const initialHoverState = {
    hoverStartup: false,
    hoverStrategic: false,
    hoverDevelopment: false,
    hoverMobileApps: false,
    hoverPlatform: false,
    hoverPartnership: false,
  };

  const [hoverState, setHoverState] = useState(initialHoverState);

  const [startup, setStartup] = useState(false);
  const [strategic, setStrategic] = useState(false);
  const [fund, setFund] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [mobileApps, setMobileApps] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [partnership, setPartnership] = useState(false);
  const [state, setState] = useState("startup");

  const handleMouseEnter = (key) => {
    setHoverState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverState((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const onChangeStartup = () => {
      setStartup(true);
      setState("startup");
  };
  const onChangeStrategic = () => {
    setStrategic(true);
    setState("strategic");
  };
  const onChangeFund = () => {
    setFund(true);
    setState("fund");
  };
  const onChangeDevelopment = () => {
    setDevelopment(true);
    setState("development");
  };
  const onChangeMobileApps = () => {
    setMobileApps(true);
    setState("mobApp");
  };
  const onChangePlatform = () => {
    setPlatform(true);
    setState("platform");
  };
  const onChangePartnership = () => {
    setPartnership(true);
    setState("partnership");
  };

  return (
    <Element id="roadmap">
    <div className="timeline">
      
      <div className="timeline-platform-leftImg">
        <img  src={TimeLineGifLeft} alt=""/>
      </div>
      {/* <div className="timeline-left"> */}
        {/* <span className="team-heading">ROAD MAP</span>
        <span className="timeline-left-mainhead mainHeading">
          Mentority's journey
        </span> */}
        {/* <div className="timeline-left-roadmap">
          <Timeline
            items={[
              {
                color: "green",
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={startup}
                    onChange={onChangeStartup}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                children: (
                  <>
                    <div className={startup? "whiteheading":"blackheading"}>Creation of the startup</div>
                    <div className="timeline-left-roadmap-para blackheading">
                      The startup was founded on 3 June 2021.Initially created
                      by Adriano and Moad, the first focus was to define the
                      current market problem, validate the project and the
                      development as such.We then started to work on the demo,
                      the business plan, the video presentation and the
                      financial plan.
                    </div>
                  </>
                ),
              },
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={strategic}
                    onChange={onChangeStrategic}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "green",
                children: (
                  <>
                    <div className={strategic? "whiteheading":"blackheading"}>
                      Signature of strategic partnership / Demo development
                    </div>
                  </>
                ),
              },
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={fund}
                    onChange={onChangeFund}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "red",
                children: (
                  
                  <>
                    <div className={fund? "whiteheading":"blackheading"}>
                      Landing Page/ Fund Raising/Demo Presentation
                    </div>
                  </>
                ),
              },
        
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={development}
                    onChange={onChangeDevelopment}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "gray",
                children: (
                  <>
                    <div className={development? "whiteheading":"blackheading"}>
                      Development by engineers of the first version of
                      Mentority!
                    </div>
                  </>
                ),
              },
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={mobileApps}
                    onChange={onChangeMobileApps}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "gray",
                children: (
                  <>
                    <div className={mobileApps? "whiteheading":"blackheading"}>Mobile application</div>
                  </>
                ),
              },
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={platform}
                    onChange={onChangePlatform}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "gray",
                children: (
                  <>
                    <div className={platform? "whiteheading":"blackheading"}>
                      1st version of the platform
                    </div>
                  </>
                ),
              },
              {
                dot: (
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    checked={partnership}
                    onChange={onChangePartnership}
                    className="timeline-left-roadmap-checkbox"
                  />
                ),
                color: "gray",
                children: (
                  <>
                    <div className={partnership? "whiteheading":"blackheading"}>Strategic partnership</div>
                  </>
                ),
              },
            ]}
          />
        </div> */}
        <div style={{ zIndex: 99999 }} className="timeline-left">
          <span className="team-heading">{t("timeline-roadmap-lg")}</span>
          <span className="timeline-left-mainhead mainHeading">
          {t("timeline-roadmap-des-lg")}
          </span>
          <div className="timeline-left-roadmap">
            <Timeline
              items={[
                {
                  color: "green",
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "startup" ? true : false}
                      onChange={onChangeStartup}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverStartup || state == "startup" ? "whiteheading" : "blackheading"
                        }
                        style={{ cursor: "pointer"}}
                        onClick={()=>onChangeStartup()}
                        onMouseEnter={()=>handleMouseEnter("hoverStartup")}
                        onMouseLeave={()=>handleMouseLeave("hoverStartup")}
                      >
                        {t("timeline-startup-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "startup" && (
                        <div className="timeline-right">
                          <img src={StartUpImage}/>
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "startup" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-startup-des-lg")}
                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "strategic" ? true : false}
                      onChange={onChangeStrategic}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "green",
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverStrategic || state == "strategic" ? "whiteheading" : "blackheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={()=>onChangeStrategic()}
                        onMouseEnter={()=>handleMouseEnter("hoverStrategic")}
                        onMouseLeave={()=>handleMouseLeave("hoverStrategic")}
                      >
                        {t("timeline-development-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "strategic" && (
                        <div className="timeline-right">
                          <img src={StrateicImage} />
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "strategic" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        <span>
                          {t("timeline-development-des-lg")}
                        </span>
                        <a href="https://be.qntsport.com/en">
                          QNT
                        </a>
                        <span>
                          {t("timeline-development-des2-lg")}
                        </span>

                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "fund" ? true : false}
                      onChange={onChangeFund}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "red",
                  children: (
                    <>
                      <div
                        className={
                          state == "fund" ? "blueheading" : "blueheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={()=>onChangeFund()}
                      >
                        {t("timeline-presentation-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "fund" && (
                        <div className="timeline-right">
                          <img src={FundImage} />
                        </div>
                      )}
                      <div
                        style={{ display: state == "fund" ? "block" : "none" }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-presentation-des-lg")}
                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "development" ? true : false}
                      onChange={onChangeDevelopment}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "gray",
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverDevelopment || state == "development"
                            ? "whiteheading"
                            : "blackheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={()=>onChangeDevelopment()}
                        onMouseEnter={()=>handleMouseEnter("hoverDevelopment")}
                        onMouseLeave={()=>handleMouseLeave("hoverDevelopment")}
                      >
                        {t("timeline-engineers-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "development" && (
                        <div className="timeline-right">
                          <img src={DevelopmentImage} />
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "development" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-engineers-des-lg")}
                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "mobApp" ? true : false}
                      onChange={onChangeMobileApps}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "gray",
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverMobileApps || state == "mobApp" ? "whiteheading" : "blackheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={()=>onChangeMobileApps()}
                        onMouseEnter={()=>handleMouseEnter("hoverMobileApps")}
                        onMouseLeave={()=>handleMouseLeave("hoverMobileApps")}
                      >
                        {t("timeline-mobile-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "mobApp" && (
                        <div className="timeline-right">
                          <img src={MobAppImage} style={{objectFit:"contain"}}/>
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "mobApp" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-mobile-des-lg")}
                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "platform" ? true : false}
                      onChange={onChangePlatform}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "gray",
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverPlatform || state == "platform" ? "whiteheading" : "blackheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => onChangePlatform()}
                        onMouseEnter={()=>handleMouseEnter("hoverPlatform")}
                        onMouseLeave={()=>handleMouseLeave("hoverPlatform")}
                      >
                        {t("timeline-version-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "platform" && (
                        <div className="timeline-right">
                          <img src={PlatformImage} />
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "platform" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-version-des-lg")}
                      </div>
                    </>
                  ),
                },
                {
                  dot: (
                    <input
                      type="checkbox"
                      id="my-checkbox"
                      checked={state == "partnership" ? true : false}
                      onChange={onChangePartnership}
                      className="timeline-left-roadmap-checkbox"
                    />
                  ),
                  color: "gray",
                  children: (
                    <>
                      <div
                        className={
                          hoverState.hoverPartnership || state == "partnership"
                            ? "whiteheading"
                            : "blackheading"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => onChangePartnership()}
                        onMouseEnter={()=>handleMouseEnter("hoverPartnership")}
                        onMouseLeave={()=>handleMouseLeave("hoverPartnership")}
                      >
                        {t("timeline-partnership-lg")}
                      </div>
                      {window.innerWidth < 700 && state == "partnership" && (
                        <div className="timeline-right">
                          <img src={PartnershipImage} />
                        </div>
                      )}
                      <div
                        style={{
                          display: state == "partnership" ? "block" : "none",
                        }}
                        className="timeline-left-roadmap-para blackheading slide-para"
                      >
                        {t("timeline-partnership-des-lg")}

                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      
      {window.innerWidth > 700 && (
        <div className="timeline-right">
          {state == "startup" && <img src={StartUpImage} />}
          {state == "strategic" && <img src={StrateicImage} />}
          {state == "development" && <img src={DevelopmentImage} />}
          {state == "fund" && <img src={FundImage} />}
          {state == "mobApp" && <div style={{height:"400px" ,marginTop:"15%"}}><img src={MobAppImage} /></div> }
          {state == "platform" && <img src={PlatformImage} />}
          {state == "partnership" && <img src={PartnershipImage} />}
        </div>
      )
      }
      <div className="timeline-platform-leftImg-right">
          <img  src={TimeLineGifRight} alt=""/>
          
        </div>
    </div>
    </Element>
  );
}
