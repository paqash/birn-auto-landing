import styled from "styled-components";

import {
  resourcesBaseUrl,
  resourcesUrl,
  screenResolutions,
} from "../../core/constants";
import {
  Container,
  HightlightedText,
  ItalicText,
  Magnifier,
  ShortStatsContainer,
  StatsImage,
  StatsItemContainer,
  StatsText,
  Text,
} from "../styled-components/app-components";
import MainButton from "../shared-components/main-button";
import ScrollIndicator from "../shared-components/scroll-indicator";

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const ContainerWrapper = styled(Container)`
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    margin-top: 0;
  }
`;

const ScrollIndicatorWrapper = styled(ScrollIndicator)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    bottom: 70px;
  }
`;

const HomePage = () => {
  return (
    <div>
      <VideoPlayer
        id="backgroundVideo"
        playsInline
        autoPlay
        muted
        loop
        poster={`${resourcesUrl}/background.png`}
      >
        <source src={`${resourcesBaseUrl}/background.mp4`} type="video/mp4" />
        <source src={`${resourcesBaseUrl}/background.webm`} type="video/webm" />
      </VideoPlayer>
      <ContainerWrapper>
        <Text>
          <Magnifier />
          <ItalicText>
            Dobro došli na Bazu službenih automobila Balkanske istraživačke
            mreže Bosne i Hercegovine (BIRN BiH)
          </ItalicText>{" "}
          - jedino mjesto na kojem možete naći{" "}
          <HightlightedText>
            sve tendere za kupovinu vozila i limuzina
          </HightlightedText>{" "}
          svih institucija i javnih kompanija.
        </Text>
        <ShortStatsContainer>
          <StatsItemContainer>
            <StatsImage
              style={{ backgroundImage: `url(${resourcesUrl}/tenderi.png)` }}
            />
            <StatsText>XXX TENDERA</StatsText>
          </StatsItemContainer>
          <StatsItemContainer>
            <StatsImage
              style={{
                backgroundImage: `url(${resourcesUrl}/automobili.png)`,
              }}
            />
            <StatsText>XXX SLUŽBENIH AUTOMOBILA U BAZI</StatsText>
          </StatsItemContainer>
        </ShortStatsContainer>
        <MainButton />
      </ContainerWrapper>
      <ScrollIndicatorWrapper />
    </div>
  );
};

export default HomePage;
