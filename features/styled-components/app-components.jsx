import styled from "styled-components";

import { resourcesUrl, screenResolutions } from "../../core/constants";

export const Container = styled.div`
  max-width: 1000px;
  width: calc(100% - 50px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-top: 5%;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    padding: 0 60px 0 50px;
    width: 75%;
    margin-top: 0;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    max-width: 1200px;
    padding-right: 0;
  }
`;

export const Text = styled.div`
  color: #fff;
  font-size: 19px;
  line-height: 30px;
  font-weight: 500;
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    font-size: 35px;
    line-height: 50px;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    font-size: 45px;
    line-height: 60px;
  }
`;

export const HightlightedText = styled.mark`
  font-size: 19px;
  background-color: #b72126;
  color: #fff;
  padding-bottom: 6px;
  font-weight: 700;
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    font-size: 35px;
    line-height: 50px;
    padding-bottom: 12px;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    font-size: 45px;
    line-height: 60px;
  }
`;

export const MainButtonWrapper = styled.button`
  width: 190px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: #b72126;
  border-radius: 35px;
  color: #fff;
  border: none;
  margin-top: 15%;
  cursor: pointer;
  margin-left: calc(50% - 95px);
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    width: 260px;
    height: 70px;
    font-size: 28px;
    margin-top: 50px;
    margin-left: 0;
  }
`;

export const ShortStatsContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 15%;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    flex-direction: row;
    margin-top: 50px;
  }
`;

export const StatsItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    width: 50%;
  }
`;

export const StatsImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

export const StatsText = styled.span`
  font-size: 25px;
  font-weight: 800;
  line-height: 28px;
  width: calc(100% - 60px);
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    font-size: 40px;
    line-height: 40px;
  }
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
  display: none;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    display: block;
  }
`;

export const ListOfOptions = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 5;
  list-style: none;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    margin-top: 20px;
    margin-left: 18px;
  }
  @media screen and (min-width: ${screenResolutions.large}px) {
    margin-top: 50px;
    line-height: 8;
  }
`;

export const ListItem = styled.li`
  position: relative;

  &::marker {
    color: #fff;
  }
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    margin-left: 1em;
  }
  &::before {
    position: absolute;
    left: -2em;
    top: 0.8em;
    content: "";
    width: 0.8em;
    height: 0.8em;
    border-right: 0.3em solid #fff;
    border-top: 0.3em solid #fff;
    transform: rotate(45deg);
    margin-right: 0.5em;
    display: block;
    @media screen and (min-width: ${screenResolutions.large}px) {
      left: -3em;
      width: 1.1em;
      height: 1.1em;
      border-right: 0.45em solid #fff;
      border-top: 0.45em solid #fff;
      transform: rotate(45deg);
      margin-right: 0.5em;
    }
  }
`;
