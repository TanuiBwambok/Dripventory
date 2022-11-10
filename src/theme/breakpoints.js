const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

/**
 *
 * @param {'up'|'down'} dir
 * @param {keyof breakpoints} to
 * @returns
 */
const mediaQuery = (dir, breakpoint) => {
  switch (dir) {
    case "down":
      return `@media (max-width: ${breakpoints[breakpoint]}px)`;
    default:
      return `@media (min-width: ${breakpoints[breakpoint]}px)`;
  }
};

export { mediaQuery };
export default breakpoints;
