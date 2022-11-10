import { Fragment } from "react";
import Box from "../components/Box";
import Typography from "../components/Typography";

const DashboardPage = () => {
  return (
    <Fragment>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3">Hello, Arthur.</Typography>
        <Typography>Welcome back and manage your products</Typography>
      </Box>

      {/*  */}

      {/* <Grid spacing={13}>
        <GridItem xs={10}>Helloo</GridItem>
        <GridItem>Helloo</GridItem>
        <GridItem>Helloo</GridItem>
        <GridItem>Helloo</GridItem>
        <GridItem>Helloo</GridItem>
      </Grid> */}
    </Fragment>
  );
};

export default DashboardPage;
