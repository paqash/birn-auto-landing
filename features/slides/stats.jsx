import styled from "styled-components";

import MainButton from "../shared-components/main-button";
import {
  Container,
  HightlightedText,
  Magnifier,
  Text,
} from "../styled-components/app-components";

export const StatsWrapper = styled(Container)`
  opacity: 0;
  transition: opacity 1s ease-in 1s;
`;

const TextWrapper = styled(Text)`
  margin-top: 50px;
`;

const Stats = (props) => {
  return (
    <StatsWrapper>
      <Magnifier />
      <Text>
        Naša Baza je pokazala da su u protekle tri godine političari i
        političarke u BiH za limuzine{" "}
        <HightlightedText>potrošili ukupno 36 miliona KM.</HightlightedText>
      </Text>
      <TextWrapper>
        Samo ove godine je do sada za limuzine{" "}
        <HightlightedText>potrošeno 7.046.829 KM</HightlightedText>, dok je za
        sve vrste vozila izdvojeno{" "}
        <HightlightedText>12.399.651 KM iz budžeta.</HightlightedText>
      </TextWrapper>
      <MainButton />
    </StatsWrapper>
  );
};

export default Stats;
