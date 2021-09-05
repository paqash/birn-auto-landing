import styled from "styled-components";

import { resourcesBaseUrl, resourcesUrl } from "../../core/constants";
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

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const ContainerWrapper = styled(Container)``;

const HomePage = () => {
  return (
    <div>
      <VideoPlayer id="backgroundVideo" playsInline autoPlay muted loop>
        <source src={`${resourcesBaseUrl}/background.mp4`} type="video/mp4" />
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
                width: "70px",
              }}
            />
            <StatsText>XXX SLUŽBENIH AUTOMOBILA U BAZI</StatsText>
          </StatsItemContainer>
        </ShortStatsContainer>
        <MainButton />
      </ContainerWrapper>
    </div>
  );
};

export default HomePage;
