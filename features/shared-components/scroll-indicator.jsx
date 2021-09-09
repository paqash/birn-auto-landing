import styled from "styled-components";
import { screenResolutions } from "../../core/constants";

const ScrollIndicatorWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #2a5caa;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${screenResolutions.small}px) {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
`;

const Arrow = styled.i`
  width: 10px;
  height: 10px;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  animation: mover 1s infinite alternate;
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;

  @media screen and (min-width: ${screenResolutions.small}px) {
    width: 20px;
    height: 20px;
    border-right: 7px solid #fff;
    border-bottom: 7px solid #fff;
  }

  @keyframes mover {
    0% {
      transform: translateY(0) rotate(45deg);
    }
    100% {
      transform: translateY(-10px) rotate(45deg);
    }
  }
`;

const ScrollIndicator = (props) => {
  return (
    <ScrollIndicatorWrapper {...props}>
      <Arrow />
    </ScrollIndicatorWrapper>
  );
};

export default ScrollIndicator;
