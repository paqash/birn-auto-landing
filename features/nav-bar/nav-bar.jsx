import styled from "styled-components";

import {
  detektorURL,
  resourcesUrl,
  screenResolutions,
} from "../../core/constants";

const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  color: white;
  z-index: 2;
  max-width: 100%;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    max-width: 1200px;
  }
`;

const BirnLogo = styled.img`
  width: 111px;
  height: 72px;
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    width: 170px;
    height: 100px;
  }
`;

const DetektorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 111px);
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    width: calc(100% - 170px);
  }
`;

const DetektorLogo = styled.div`
  width: 69px;
  height: 69px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-image: url(${resourcesUrl}/detektor.png);
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    width: 150px;
    height: 55px;
  }
`;

const MyMoneyLogo = styled.div`
  width: 62px;
  height: 62px;
  background-size: cover;
  background-position: center;
  background-image: url(${resourcesUrl}/mojepare.png);
  @media screen and (min-width: ${screenResolutions.mobileSmall}px) {
    width: 100px;
    height: 60px;
  }
`;

const Menu = styled.div`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: center;
  background-image: url(${resourcesUrl}/menu.png);
  margin-left: 20px;
  @media screen and (min-width: ${screenResolutions.mobile}px) {
    display: none;
  }
`;

const NavBar = (props) => {
  const { handleMenuToggle } = props;

  const handleDetektorLogoClick = () => {
    window.open(detektorURL, "_blank");
  };

  const handleOnMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleMenuToggle(true);
  };

  return (
    <NavBarContainer>
      <BirnLogo src={`${resourcesUrl}/birn.png`} alt="birn_logo" />
      <DetektorContainer>
        <DetektorLogo onClick={handleDetektorLogoClick} />
        <MyMoneyLogo />
        <Menu onClick={handleOnMenuClick} />
      </DetektorContainer>
    </NavBarContainer>
  );
};

export default NavBar;
