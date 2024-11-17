import React, { useState } from "react";
import ReactPlayer from "react-player";
import Header from "../components/header/Header";
import { browserName, isMobile } from "react-device-detect";

import Menu from "../components/menu/Menu";
import MainSection from "../components/mainSection/MainSection";
import PartnersSection from "../components/partnersSection/PartnersSection";
import HeroBackGround from "../assets/video/hero_background.mp4";
import IntroSection from "../components/introSection/IntroSection";

const Footer = React.lazy(() => import("../components/footer/Footer"));
const Learning = React.lazy(() => import("../components/learning/Learning"));
const SalesTeamForm = React.lazy(() =>
  import("../components/team/SalesTeamForm")
);
const TeamMembers = React.lazy(() => import("../components/team/TeamMembers"));
const Pricing = React.lazy(() => import("../components/pricing/Pricing"));
const InvestorsSection = React.lazy(() =>
  import("../components/investorsSection/InvestorsSection")
);
const TimeLine = React.lazy(() => import("../components/team/TimeLine"));
const Platform = React.lazy(() => import("../components/platform/Platform"));

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="home">
      {isOpen && <Menu handleOpenMenu={handleOpenMenu} isOpen={isOpen} />}

      <div style={{ backgroundColor: "", height: "auto" }}>
        <div className="home-hero-background">
          {isMobile && browserName == "Safari" ? (
            <ReactPlayer
              className="home-hero-background-video"
              url={HeroBackGround}
              playsinline={true}
              width={"100%"}
              height={"50vh"}
              loop
              muted
              playing
            />
          ) : (
            <video autoPlay loop muted playsInline>
              <source src={HeroBackGround} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div>
          <Header handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
          <MainSection />
          <PartnersSection />
        </div>
      </div>
      <IntroSection />
      <Learning />
      <Platform />
      <TimeLine />
      <InvestorsSection />
      <Pricing />
      <TeamMembers />
      <SalesTeamForm />
      <Footer />
    </div>
  );
};

export default Home;
