/**
 *
 * @param {variant} variant default|outlined|contained
 * @returns
 */
export default function Button({ variant = "default" }) {
  switch (variant) {
    case "outlined":
      return <OutlinedButton />;

    case "contained":
      <ContainedButton />;
    default:
      return <DefaultButton />;
  }
}
