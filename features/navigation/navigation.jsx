import { Fragment, useEffect } from "react";
import styled from "styled-components";

import { navItems, screenResolutions } from "../../core/constants";
import { useResolution } from "../../core/helper";

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
  max-width: 200px;
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

const Link = styled.a`
  text-decoration: none;
`;

const SideMenu = styled.div`
  height: 100%;
  width: ${(props) => (props.open ? "250px" : "0px")};
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  color: #2c5dab;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  a {
    color: #2c5dab;
  }
`;

const SideMenuItem = styled.div`
  height: calc((100% - 8px) / 5);
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-of-type) {
    border-bottom: 2px solid #2c5dab;
  }
  &.active {
    background-color: #2c5dab;
    color: #fff;
    a {
      color: #fff;
    }
    ${NavImage} {
      filter: brightness(0) invert(1);
    }
  }
`;

const SideMenuItemText = styled.div`
  width: calc(100% - 63px);
  font-weight: 500;
  font-size: 22px;
`;

const Navigation = (props) => {
  const { isMenuOpen, handleMenuToggle } = props;

  const resolution = useResolution();
  useEffect(() => {
    const closeMenu = () => {
      handleMenuToggle(false);
    };

    document.body.addEventListener("click", closeMenu);

    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  const renderDesktopNavigation = () => {
    return (
      <NavigationWrapper id="mainNavigation">
        {navItems.map((item) => {
          if (item.hide) {
            return null;
          }
          return (
            <ListItem key={item.name} data-menuanchor={item.name}>
              <Link href={`#${item.name}`}>
                <NavItem>
                  <NavImage style={{ backgroundImage: `url(${item.image})` }} />
                  <Pil />
                </NavItem>
              </Link>
            </ListItem>
          );
        })}
      </NavigationWrapper>
    );
  };

  const renderMobileNavigation = () => {
    return (
      <SideMenu id="mainNavigation" open={isMenuOpen}>
        {navItems.map((item) => {
          if (item.hide) {
            return null;
          }
          return (
            <SideMenuItem
              key={item.name}
              data-menuanchor={item.name}
              onClick={() => handleMenuToggle(false)}
            >
              <Link href={`#${item.name}`}>
                <NavItem>
                  <NavImage style={{ backgroundImage: `url(${item.image})` }} />
                  <SideMenuItemText>{item.label}</SideMenuItemText>
                </NavItem>
              </Link>
            </SideMenuItem>
          );
        })}
      </SideMenu>
    );
  };

  return resolution.desktop
    ? renderDesktopNavigation()
    : renderMobileNavigation();
};

export default Navigation;
