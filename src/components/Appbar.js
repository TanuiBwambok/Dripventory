import styled from "styled-components";
import icon from "../assets/images/user.webp";
import { APPBAR, SIDEBAR } from "../constants";
import colors from "../theme/colors";
import pxToRem from "../utils/pxToRem";
import Typography from "./Typography";

const MainStyles = styled("div")(() => ({
  height: pxToRem(APPBAR.height),
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  paddingLeft: SIDEBAR.width,
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  paddingRight: pxToRem(40),
  background: colors.bodyBg,
}));

const Avatar = styled("img")(() => ({
  height: 60,
  width: 60,
  borderRadius: 60 / 2,
  marginLeft: 15,
}));

export default function Appbar() {
  return (
    <MainStyles>
      <div>
        <Typography variant="subtitle1">Arthur Manyonge</Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          Sales Agent
        </Typography>
      </div>
      <Avatar src={icon} alt="" />
    </MainStyles>
  );
}
