import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { navbarStyles } from "./navbar.styles";

const Navbar = () => {
  const classes = navbarStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ripley Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
