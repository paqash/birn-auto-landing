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
  width: 100%;
  color: white;
  z-index: 2;
  max-width: 1000px;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    max-width: 1200px;
  }
`;

const BirnLogo = styled.img`
  width: 170px;
  height: 100px;
`;

const DetektorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DetektorLogo = styled.div`
  width: 150px;
  height: 55px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const MyMoneyLogo = styled.div`
  width: 100px;
  height: 60px;
  background-size: cover;
  background-position: center;
`;

const NavBar = () => {
  const handleDetektorLogoClick = () => {
    window.open(detektorURL, "_blank");
  };
  return (
    <NavBarContainer>
      <BirnLogo src={`${resourcesUrl}/birn.png`} alt="birn_logo" />
      <DetektorContainer>
        <DetektorLogo
          onClick={handleDetektorLogoClick}
          style={{ backgroundImage: `url(${resourcesUrl}/detektor.png)` }}
        />
        <MyMoneyLogo
          style={{ backgroundImage: `url(${resourcesUrl}/mojepare.png)` }}
        />
      </DetektorContainer>
    </NavBarContainer>
  );
};

export default NavBar;
