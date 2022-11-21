import { Fragment } from "react";
import Box from "../../components/Box";
import Button from "../../components/button";
import Typography from "../../components/Typography";

export default function ProductsPage() {
  return (
    <Fragment>
      <Typography variant="h2">Products</Typography>
      <Typography style={{ maxWidth: 480 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "end",
          paddingRight: 20,
        }}
      >
        <Button variant="outlined" style={{ borderRadius: 30 }}>
          + Add Product
        </Button>
      </Box>

      <Box></Box>
    </Fragment>
  );
}
