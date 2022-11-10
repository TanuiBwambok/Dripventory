import styled from "styled-components";
import colors from "../theme/colors";
import pxToRem from "../utils/pxToRem";

const Typography = styled("div")(
  /**
   *
   * @param {{variant:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'body1'|'body2'}} props
   * @returns {import("styled-components").CSSObject}
   */
  (props) => {
    switch (props.variant) {
      case "h1":
        return typography({
          fontWeight: 500,
          fontSize: 60,
        });
      case "h2":
        return typography({
          fontWeight: 400,
          fontSize: 52,
        });
      case "h3":
        return typography({
          fontWeight: 500,
          fontSize: 40,
        });
      case "subtitle1":
        return typography({
          fontWeight: 400,
          fontSize: pxToRem(24),
        });
      case "subtitle2":
        return typography({
          fontWeight: 500,
          fontSize: pxToRem(18),
        });
      case "body1":
      default:
        return typography({
          fontSize: pxToRem(16),
          fontWeight: 300,
        });
    }
  }
);

/**
 *
 * @param {import("styled-components").CSSObject} props
 * @returns {import("styled-components").CSSObject}
 */
const typography = (props) => {
  return {
    lineHeight: 1.2,
    color: colors.body,
    ...props,
  };
};

export default Typography;
