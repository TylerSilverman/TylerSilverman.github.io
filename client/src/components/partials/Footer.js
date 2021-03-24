import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "darkgreen",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Footer = (props) => {
  const year = new Date().getFullYear();

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="body2" align="center">
          &copy; {year} Tyler Silverman
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
