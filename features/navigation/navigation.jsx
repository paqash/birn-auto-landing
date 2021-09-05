import styled from "styled-components";

import { navItems, screenResolutions } from "../../core/constants";

const NavigationWrapper = styled.ul`
  color: #fff;
  position: absolute;
  z-index: 3;
  right: -50px;
  top: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  @media screen and (min-width: ${screenResolutions.medium}px) {
    right: -25px;
  }
`;

const Pil = styled.div`
  width: 23px;
  height: 69px;
  border: 1px solid #bebebf;
  border-radius: 11px;
  &:hover {
    background-color: #fff;
  }
`;

const NavImage = styled.div`
  margin-right: 10px;
  width: 53px;
  height: 69px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  &:hover,
  &.active {
    ${Pil} {
      background-color: #fff;
    }
    ${NavImage} {
      filter: brightness(0) invert(1);
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper id="mainNavigation">
      {navItems.map((item) => {
        if (item.hide) {
          return null;
        }
        return (
          <ListItem key={item.name} data-menuanchor={item.name}>
            <a href={`#${item.name}`}>
              <NavItem>
                <NavImage style={{ backgroundImage: `url(${item.image})` }} />
                <Pil />
              </NavItem>
            </a>
          </ListItem>
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
