import styled from "styled-components";

import { resourcesUrl, screenResolutions } from "../../core/constants";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-left: 50px;
`;

export const Text = styled.div`
  color: #fff;
  font-size: 29px;
  line-height: 40px;
  font-weight: 500;
  @media screen and (min-width: ${screenResolutions.small}px) {
    font-size: 39px;
    line-height: 50px;
  }
  @media screen and (min-width: ${screenResolutions.medium}px) {
    font-size: 49px;
    line-height: 70px;
  }
`;

export const MainButtonWrapper = styled.button`
  width: 260px;
  height: 70px;
  font-size: 28px;
  font-weight: bold;
  background-color: #b72126;
  border-radius: 35px;
  color: #fff;
  border: none;
  margin-top: 50px;
  cursor: pointer;
`;

export const ShortStatsContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
`;

export const StatsItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const StatsImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

export const StatsText = styled.span`
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
`;

export const ItalicText = styled.span`
  font-style: italic;
`;

export const Magnifier = styled.div`
  background-image: url(${resourcesUrl}/lupica.png);
  background-size: cover;
  background-position: center;
  width: 70px;
  height: 117px;
  position: absolute;
  left: -30px;
`;

export const HightlightedText = styled.mark`
  font-size: 39px;
  background-color: #b72126;
  color: #fff;
  padding-bottom: 12px;
  font-weight: 700;
  @media screen and (min-width: ${screenResolutions.small}px) {
    font-size: 49px;
    line-height: 50px;
  }
  @media screen and (min-width: ${screenResolutions.medium}px) {
    font-size: 59px;
    line-height: 70px;
  }
`;

export const ListOfOptions = styled.ul`
  margin-top: 50px;
  line-height: 8;
  margin-left: 18px;
`;

export const ListItem = styled.li`
  &::marker {
    color: #fff;
  }
`;
