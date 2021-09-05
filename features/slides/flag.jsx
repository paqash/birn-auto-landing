import styled from "styled-components";

import MainButton from "../shared-components/main-button";
import {
  Container,
  HightlightedText,
  Magnifier,
  Text,
} from "../styled-components/app-components";

export const FlagWrapper = styled(Container)`
  opacity: 0;
  transition: opacity 1s ease-in 1s;
`;

const Flag = (props) => {
  return (
    <FlagWrapper>
      <Magnifier />
      <Text>
        Novinari BIRN-a BiH su u protekle tri godine{" "}
        <HightlightedText>
          crvenom zastavicom označili ukupno xxx tendera
        </HightlightedText>{" "}
        za nabavku vozila u kojima je ograničena konkurencija ili na drugi način
        omogućeno favoriziranje određenih ponuđača.
      </Text>
      <MainButton />
    </FlagWrapper>
  );
};

export default Flag;
