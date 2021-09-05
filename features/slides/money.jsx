import styled from "styled-components";

import { resourcesUrl, screenResolutions } from "../../core/constants";
import { Container } from "../styled-components/app-components";

const MyMoneyImage = styled.img`
  width: 50%;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    width: 70%;
  }
`;

const MoneyWrapper = styled(Container)`
  text-align: center;
`;

const Money = (props) => {
  return (
    <MoneyWrapper>
      <MyMoneyImage src={`${resourcesUrl}/moje_pare.png`} alt="moje_pare" />
    </MoneyWrapper>
  );
};

export default Money;
