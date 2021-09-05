import styled from "styled-components";

import { FlagWrapper } from "../slides/flag";
import { InfoSlideWrapper } from "../slides/info";
import { ShareWrapper } from "../slides/share";
import { StatsWrapper } from "../slides/stats";

const PageContainerWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: transparent;
    background-image: radial-gradient(transparent 68%, black 33%);
    background-size: 0px 0px;

    transition-property: background-size;
    transition-duration: 1s;
    transition-delay: 500;
  }
  ${FlagWrapper},
  ${ShareWrapper},
  ${StatsWrapper},
  ${InfoSlideWrapper} {
    opacity: 0;
  }
  &.dotted {
    &::before {
      background-size: 10px 10px;
    }
    ${FlagWrapper},
    ${ShareWrapper},
    ${StatsWrapper},
    ${InfoSlideWrapper} {
      opacity: 1;
    }
  }
`;

const PageContainer = (props) => {
  const { backgroundImage, className, children, ...other } = props;

  return (
    <PageContainerWrapper
      {...other}
      className={className}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </PageContainerWrapper>
  );
};

export default PageContainer;
