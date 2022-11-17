import React from "react";
import ContainedButton from "./Contained";
import DefaultButton from "./Default";
import OutlinedButton from "./Outlined";
/**
 *
 * @param {{variant:'default'|'outlined'|'contained'}& React.ComponentProps<'button'>} param0
 * @returns
 */
export default function Button({ variant = "default", children, ...props }) {
  switch (variant) {
    case "outlined":
      return <OutlinedButton {...props}>{children}</OutlinedButton>;

    case "contained":
      return <ContainedButton {...props}>{children}</ContainedButton>;

    default:
      return <DefaultButton {...props}>{children}</DefaultButton>;
  }
}
