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
  transform: rotate(33deg);
  height: 269px;
  margin-top: 116px;
  margin-left: 26px;
`;

const Tirangle = styled.div`
  float: left;

  box-sizing: border-box;
  shape-outside: polygon(0 0, 0 320px, 500px 320px);
  -webkit-clip-path: polygon(0 0, 0 320px, 500px 320px);
  width: 500px;
  height: 320px;
  background-color: transparent;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    margin-top: 100px;
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
