import { LightenDarkenColor } from "lighten-darken-color";
import styled from "styled-components";
import colors from "../../theme/colors";
import DefaultButton from "./Default";

const OutlinedButton = styled(DefaultButton)(() => {
  return {
    background: colors.bodyBg,
    border: `1.8px solid ${colors.body}`,
    "&:hover": {
      background: LightenDarkenColor(colors.bodyBg, -10),
    },
  };
});

export default OutlinedButton;
