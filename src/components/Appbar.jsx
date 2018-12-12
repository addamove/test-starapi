import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { HomeLink } from "./LinkToHome";

const Appbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button component={HomeLink}>
          <Typography variant="h2" color="secondary">
            StarAPI
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
