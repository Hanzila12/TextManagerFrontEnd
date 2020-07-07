import React, { Component, useState, useEffect } from 'react';
import Main from "./Main";
import View1 from "./View1";
import './App.css';
import './index.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import PostMessageForm from "./components/PostMessageForm";
import { store } from "./actions/store";
import { Container, AppBar, Typography, withStyles, Button, Grid } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import { render } from 'react-dom';
import { connect } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = theme => ({
  someClass: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    BackgroundColor: "AliceBlue"

  },
  otherClass: {
    background: 'AliceBlue'
  },
  upperBtns1: {
    width: "40%",
    marginLeft: theme.spacing(-80)
  },
  upperBtns2: {
    width: "40%",
    marginLeft: theme.spacing(-60)
  },
  actionDiv: {
    textAlign: "center",
    marginLeft: theme.spacing(93)
  }
});

class App extends Component {
  styles = theme => ({
    someClass: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      BackgroundColor: "AliceBlue"

    },
    otherClass: {
      background: 'AliceBlue'
    },
    upperBtns1: {
      width: "40%",
      marginLeft: theme.spacing(-80)
    },
    upperBtns2: {
      width: "40%",
      marginLeft: theme.spacing(-60)
    },
    actionDiv: {
      textAlign: "center",
      marginLeft: theme.spacing(93)
    }
  });

  state = {
    renderView: ''
  };

  clickBtn = e => {
    this.setState({
      renderView: +e.target.value
    });
  };

  render() {


    switch (this.state.renderView) {
      case 1:
        return (
          <Provider store={store}>
            <Main clickBtn={this.clickBtn} />
            <PostMessages />
          </Provider>);


      case 2:
        return (
          <Provider store={store}>
            <Main clickBtn={this.clickBtn} />
            <PostMessages />
          </Provider>);

      default:
        //console.log("Hi from default")
        return (
          <div>
            <Main clickBtn={this.clickBtn} />
            <Provider store={store} >
              <Container maxWidth="lg">
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
              </Container>
            </Provider>
          </div>
        );
    }

  }
}
export default withStyles(styles)(App);

