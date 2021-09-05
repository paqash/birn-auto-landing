import styled from "styled-components";

import { resourcesUrl, screenResolutions } from "../../core/constants";

const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  z-index: 2;
  max-width: 1000px;
  justify-content: space-between;
  margin-top: 15px;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    max-width: 1200px;
  }
`;

const BirnLogo = styled.img`
  width: 246px;
  height: 150px;
`;

const DetektorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DetektorLogo = styled.div`
  width: 198px;
  height: 75px;
  background-size: cover;
  background-position: center;
`;

const MyMoneyLogo = styled.div`
  width: 132px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <BirnLogo src={`${resourcesUrl}/birn.png`} alt="birn_logo" />
      <DetektorContainer>
        <DetektorLogo
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
