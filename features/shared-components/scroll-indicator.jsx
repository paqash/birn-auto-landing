import styled from "styled-components";

const ScrollIndicatorWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: #2a5caa;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.i`
  width: 20px;
  height: 20px;
  border-right: 7px solid #fff;
  border-bottom: 7px solid #fff;
  transform: rotate(45deg);
  animation: mover 1s infinite alternate;

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
