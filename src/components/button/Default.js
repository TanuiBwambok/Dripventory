import styled from "styled-components";
import colors from "../../theme/colors";
import pxToRem from "../../utils/pxToRem";

const DefaultButton = styled("button")(() => {
  return {
    paddingLeft: pxToRem(16),
    paddingRight: pxToRem(16),
    paddingTop: pxToRem(10),
    paddingBottom: pxToRem(10),
    fontFamily: "inherit",
    fontWeight: 400,
    border: "none",
    background: "none",
    color: colors.body,
    cursor: "pointer",
    transition: ".15s ease-in-out",
    borderRadius: 5,
  };
});

export default DefaultButton;
