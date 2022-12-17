import styled from "styled-components";
import Typography from "../../components/Typography";
import { APPBAR, SIDEBAR } from "../../constants";
import colors from "../../theme/colors";

const MainStyles = styled("div")(() => ({
  height: APPBAR.height,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  paddingLeft: SIDEBAR.width,
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  paddingRight: 20,
  background: colors.bodyBg,
}));

const Avatar = styled("img")(() => ({
  height: 60,
  width: 60,
  borderRadius: 60 / 2,
  marginLeft: 15,
}));

export default function Background() {
  return (
    <MainStyles>
      <div>
        <Typography variant="body1">gifkds</Typography>
        <Typography variant="subtitle1">Do it</Typography>
        <Typography variant="subtitle1">Arthur Manyonge</Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          Sales Agent
        </Typography>
      </div>
    </MainStyles>
  );
}
