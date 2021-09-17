import styled from "styled-components";

import { resourcesUrl, screenResolutions } from "../../core/constants";
import MainButton from "../shared-components/main-button";
import {
  Container,
  HightlightedText,
  Magnifier,
  Text,
} from "../styled-components/app-components";

export const ShareWrapper = styled(Container)`
  opacity: 0;
  transition: opacity 1s ease-in 1s;
  margin-top: 40px;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    margin-top: 0px;
  }
`;

const Image = styled.img`
  float: left;
  transform: rotate(23deg);
  height: 145px;
  margin-top: 77px;
  margin-left: 6px;
  @media screen and (min-width: ${screenResolutions.mobileExtraSmall}px) {
    height: 269px;
    margin-top: 114px;
    margin-left: 12px;
  }
`;

const Tirangle = styled.div`
  float: left;
  box-sizing: border-box;
  shape-outside: polygon(0 0, 0 300px, 400px 300px);
  -webkit-clip-path: polygon(0 0, 0 300px, 400px 300px);
  width: 200px;
  height: 200px;
  background-color: transparent;
  @media screen and (min-width: ${screenResolutions.mobileExtraSmall}px) {
    shape-outside: polygon(0 0, 0 320px, 500px 320px);
    -webkit-clip-path: polygon(0 0, 0 320px, 500px 320px);
    width: 425px;
    height: 320px;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    margin-left: -100px;
    margin-top: -55px;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    margin-top: -10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  max-width: 100%;
  @media screen and (min-width: ${screenResolutions.mobileExtraSmall}px) {
    max-width: 80%;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    margin-top: 60px;
    max-width: 75%;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    margin-top: 100px;
    max-width: 90%;
  }
`;

const Share = () => {
  return (
    <ShareWrapper>
      <Magnifier />
      <Text>
        Uđite na Bazu službenih automobila i pogledajte na koji{" "}
        <HightlightedText>način se troše vaše pare</HightlightedText>.
      </Text>

      <ImageContainer>
        <Tirangle>
          <Image
            src={`${resourcesUrl}/moje_pare.png`}
            alt="pare"
            align="left"
          />
        </Tirangle>
        <Text>
          Pratite naše naloge na društvenim mrežama i podijelite sadržaj sa Baze
          uz hashtag <HightlightedText>#mojepare</HightlightedText>
        </Text>
      </ImageContainer>
      <MainButton />
    </ShareWrapper>
  );
};

export default Share;
