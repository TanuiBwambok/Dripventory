import styled from "styled-components";

const Box = styled("div")``;

export const Grid = styled(Box)(
  /**
   *
   * @param {{spacing?:number}} props
   * @returns {import("styled-components").CSSObject}
   */
  (props) => ({
    display: "grid",
    gridColumnGap: props?.spacing ?? 0,
    gridRowGap: props?.spacing ?? 0,
  })
);

export const Stack = styled(Box)(
  /**
   *
   * @param {{direction:'row'|'column', spacing:number}} param0
   * @returns
   */
  ({ direction, spacing }) => {
    return {
      display: "flex",
      flexDirection: direction ?? "colummn",
      gap: spacing ?? 12,
    };
  }
);

export const GridItem = styled(Box)`
  ${(props) => props.xs}
`;

/**
 *
 * @param {0|1|2|3|4|5|6|7|8|9|10|11|12} val
 * @returns {'auto'|'string'}
 */
const toGridWidth = (val) => {
  if (typeof val !== "number") return "auto";

  return `auto span ${val}`;
};

export default Box;
