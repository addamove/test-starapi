import React from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  root: {
    width: "100%",
    margin: 0
  }
};

const GridLayout = ({ children, classes }) => {
  return (
    <Grid container spacing={40} className={classes.root}>
      <Hidden smDown>
        <Grid item md={4} />
      </Hidden>
      <Grid item md={4} sm={12}>
        {children}
      </Grid>
      <Hidden smDown>
        <Grid item md={4} />
      </Hidden>
    </Grid>
  );
};

GridLayout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(GridLayout);
