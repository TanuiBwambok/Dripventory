import colorAlpha from "color-alpha";
import { Fragment } from "react";
import nav_icon from "../assets/images/nav_icon.png";
import Box, { Stack } from "../components/Box";
import Button from "../components/button";
import Typography from "../components/Typography";
import colors from "../theme/colors";

const DashboardButton = ({ children }) => {
  return (
    <Button
      variant="outlined"
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 13,
        borderWidth: 1.2,
        background: colors.bodyBg,
        borderColor: colorAlpha(colors.body, 30),
      }}
    >
      <Typography>{children}</Typography>
      <img style={{ marginLeft: 40 }} src={nav_icon} width="20" height="20" />
    </Button>
  );
};

const DashboardPage = () => {
  return (
    <Fragment>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2">Hello, Arthur.</Typography>
        <Typography>Welcome back and manage your products</Typography>
      </Box>

      {/*  */}
      <Box style={{ paddingTop: 40 }}>
        <Stack spacing={13} style={{ display: "flex", flexDirection: "row" }}>
          <DashboardButton variant="outlined">Products</DashboardButton>
          <DashboardButton variant="outlined">Sales</DashboardButton>
        </Stack>
      </Box>
      <Box style={{ paddingTop: 40 }}>
        <Stack spacing={13} style={{ display: "flex", flexDirection: "row" }}>
          <DashboardButton variant="outlined">Deliveries</DashboardButton>
          <DashboardButton variant="outlined">Customers</DashboardButton>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default DashboardPage;
