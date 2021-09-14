import { useState } from "react";
import styled from "styled-components";
import { screenResolutions } from "../../core/constants";

import MainButton from "../shared-components/main-button";
import {
  Container,
  HightlightedText,
  ListItem,
  ListOfOptions,
  Magnifier,
  Text,
} from "../styled-components/app-components";

export const InfoSlideWrapper = styled(Container)`
  opacity: 0;
  transition: opacity 1s ease-in 1s;
  margin-top: 55px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PlusButton = styled.div`
  font-size: 95px;
  color: #fff;
  line-height: 125px;
  transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};

  transition-property: transform;
  transition-duration: 500ms;
  cursor: pointer;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    font-size: 200px;
  }
`;

const ListOfOptionsWrapper = styled(ListOfOptions)`
  max-height: ${(props) => (props.open ? "600px" : "0px")};
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const MainButtonWrapper = styled(MainButton)`
  margin-top: 5%;
  @media screen and (min-width: ${screenResolutions.large}px) {
    margin-top: 10%;
  }
`;

const InfoSlide = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <InfoSlideWrapper open={showInfo}>
      <Magnifier />
      <TextWrapper>
        <Text>
          Uz podatke o kupovini vozila, u Bazi možete{" "}
          <HightlightedText>naći informacije o:</HightlightedText>
        </Text>
        <PlusButton open={showInfo} onClick={() => setShowInfo(!showInfo)}>
          +
        </PlusButton>
      </TextWrapper>
      <ListOfOptionsWrapper open={showInfo}>
        <ListItem>
          <Text>
            Voznom parku{" "}
            <HightlightedText>
              xxxx institucija i xxxx javnih kompanija
            </HightlightedText>
            ,
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Koje fime najčešće{" "}
            <HightlightedText>pobjeđuju na tenderima</HightlightedText>,
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Koje su <HightlightedText>omiljene marke</HightlightedText>{" "}
            političara i političarki,
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Podatke o tome{" "}
            <HightlightedText>koliko se vašeg novca</HightlightedText> troši na
            održavanje, gorivo, osiguranje, gume, putarine i pranje službenih
            automobila
          </Text>
        </ListItem>
      </ListOfOptionsWrapper>
      <MainButtonWrapper />
    </InfoSlideWrapper>
  );
};

export default InfoSlide;
