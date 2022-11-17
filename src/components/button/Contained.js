import { LightenDarkenColor } from "lighten-darken-color";
import styled from "styled-components";
import colors from "../../theme/colors";
import DefaultButton from "./Default";

const ContainedButton = styled(DefaultButton)(() => {
  return {
    background: colors.light,

    "&:hover": {
      background: LightenDarkenColor(colors.light, -10),
    },
  };
});

export default ContainedButton;
