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

const Stats = (props) => {
  return (
    <StatsWrapper>
      <Magnifier />
      <Text>
        Naša Baza je pokazala da su u protekle tri godine političari i
        političarke u BiH za limuzine{" "}
        <HightlightedText>potrošili ukupno xxxx KM.</HightlightedText>
      </Text>
      <Text>
        Samo ove godine je do sada za limuzine{" "}
        <HightlightedText>potrošeno xxxx KM</HightlightedText>, dok je za sve
        vrste vozila izdvojeno{" "}
        <HightlightedText>xxxx KM iz budžeta.</HightlightedText>
      </Text>
      <MainButton />
    </StatsWrapper>
  );
};

export default Stats;
