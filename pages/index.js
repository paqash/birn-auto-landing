import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import styled, { createGlobalStyle } from "styled-components";

import NavBar from "../features/nav-bar/nav-bar";
import PageContainer from "../features/page-container/page-container";
import InfoSlide from "../features/slides/info";
import Stats from "../features/slides/stats";
import Flag from "../features/slides/flag";
import Money from "../features/slides/money";
import Share from "../features/slides/share";
import { fullPageKey, navItems, resourcesUrl } from "../core/constants";
import Navigation from "../features/navigation/navigation";
import HomePage from "../features/slides/homePage";

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Exo 2", Arial;
  }
`;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = useMemo(() => {
    return [
      {
        id: 1,
        backgroundImage: `${resourcesUrl}/back_1.jpg`,
        component: <InfoSlide />,
        showDots: true,
      },
      {
        id: 2,
        backgroundImage: `${resourcesUrl}/key.jpg`,
        component: <Stats />,
        showDots: true,
      },
      {
        id: 3,
        backgroundImage: `${resourcesUrl}/wheel.jpg`,
        component: <Flag />,
        showDots: true,
      },
      {
        id: 4,
        backgroundImage: `${resourcesUrl}/engine.jpg`,
        component: <Money />,
        showDots: false,
      },
      {
        id: 5,
        backgroundImage: `${resourcesUrl}/engine.jpg`,
        component: <Share />,
        showDots: true,
      },
    ];
  });

  return (
    <div>
      <Head>
        <title>BIRN BiH - Baza službenih automobila</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Main>
        <GlobalStyle />
        <NavBar handleMenuToggle={setIsMenuOpen} />
        <ReactFullpage
          licenseKey={fullPageKey}
          menu="#mainNavigation"
          anchors={navItems.map((i) => i.name)}
          onLeave={(origin) => {
            origin.item.classList.remove("dotted");
            if (origin.isFirst) {
              const videoPlayer = document.getElementById("backgroundVideo");
              if (videoPlayer) videoPlayer.pause();
            }
          }}
          afterLoad={(origin, destination) => {
            const isDottedBackground = destination.item.dataset.dots;
            if (isDottedBackground === "true") {
              destination.item.classList.add("dotted");
            }
            if (destination.isFirst) {
              const videoPlayer = document.getElementById("backgroundVideo");
              if (videoPlayer) videoPlayer.play();
            }
          }}
          render={() => (
            <ReactFullpage.Wrapper>
              <div id="videoBackground" key="asdfa" className="section">
                <HomePage />
              </div>
              {images.map((item) => (
                <PageContainer
                  data-dots={item.showDots}
                  key={item.id}
                  className="section"
                  backgroundImage={item.backgroundImage}
                >
                  {item.component}
                </PageContainer>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
        <Navigation isMenuOpen={isMenuOpen} handleMenuToggle={setIsMenuOpen} />
      </Main>
    </div>
  );
}
