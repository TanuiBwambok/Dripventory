import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { APPBAR, SIDEBAR } from "../../constants";
import pxToRem from "../../utils/pxToRem";
import Background from "./Auth";

const Main = styled("main")(() => ({
  height: "100%",
  paddingLeft: SIDEBAR.width + 50,
  paddingTop: pxToRem(APPBAR.height),
  paddingRight: 20,
}));

const AuthLayout = () => {
  return (
    <Fragment>
      <Background />
      <Outlet />
    </Fragment>
  );
};

export default AuthLayout;
