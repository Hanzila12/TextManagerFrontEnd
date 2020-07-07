import React from "react";
import "./App.css";
import { Container, AppBar, Typography, withStyles, Button, Grid } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";



export default props => (

 <>

  <AppBar
   className="header"
   position="static"
   backgroundColor="red" >
   <Typography
    className="headerTitle"
    variant="h3"
    align="left">
    TEXT  MANAGER
          </Typography>
  </AppBar>

  <button className="BtnStyle center1" value={1} onClick={props.clickBtn}>
   New Text
    </button>{" "}
    <Link
      activeClass="active"
      to="view1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
  <button
   className="BtnStyle center2"
   value={2}
   onClick={props.clickBtn}
  >
   
    View Text
  
  </button>{" "}
    </Link>

 </>
);