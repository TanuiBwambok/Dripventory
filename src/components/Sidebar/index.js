import colorAlpha from "color-alpha";
import { LightenDarkenColor } from "lighten-darken-color";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { APPBAR, SIDEBAR } from "../../constants";
import colors from "../../theme/colors";
import pxToRem from "../../utils/pxToRem";
import sidebarConfig from "./config";

const MainStyles = styled("div")(() => ({
  position: "fixed",
  width: SIDEBAR.width,
  height: "100vh",
  zIndex: 1000,
  left: 0,
  top: 0,
  background: colors.bodyBg,
  boxShadow: `3px 0px 12px ${colorAlpha(colors.body, 0.15)}`,
  display: "flex",
  flexDirection: "column",
}));

const TopHeader = styled("p")(() => ({
  fontWeight: 700,
  height: pxToRem(APPBAR.height),
  fontSize: pxToRem(36),
  textAlign: "center",
  background: colors.primary,
  color: colors.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
}));

const NavContainer = styled("div")(() => ({
  marginTop: pxToRem(30),
  paddingLeft: pxToRem(15),
  display: "flex",
  flexDirection: "column",
}));

const NavLink = styled(Link)(({ $active }) => ({
  paddingTop: pxToRem(20),
  paddingBottom: pxToRem(20),
  color: $active ? colors.primary : colors.body,
  fontWeight: 500,

  textDecoration: "none",
  "&:visited": {
    color: colors.body,
  },

  "&:hover": {
    color: LightenDarkenColor(colors.body, 40),
  },
}));

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <MainStyles>
      <TopHeader>Dripventory</TopHeader>

      <NavContainer>
        {sidebarConfig.map((conf, index) => {
          const active = pathname.includes(conf.path);

          return (
            <NavLink key={index} to={conf.path} $active={active}>
              {conf.title}
            </NavLink>
          );
        })}
      </NavContainer>
    </MainStyles>
  );
};

export default Sidebar;
