import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import { Grid, Paper, withStyles, List, ListItem, ListItemText, Typography, Divider, Button } from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";
import { Link, animateScroll as scroll } from "react-scroll";
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { tsConstructorType } from "@babel/types";

const styles = theme => ({
  paper: {
    top: "100%",
    margin: theme.spacing(3),
    padding: theme.spacing(8)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center",
    marginLeft: theme.spacing(93)
  },
  upperBtns1: {
    width: "40%",
    marginLeft: theme.spacing(-80)
  },
  upperBtns2: {
    width: "40%",
    marginLeft: theme.spacing(-60)
  },
  gridAlign: {

    marginLeft: theme.spacing(15)
  },
  ntxt: {

    marginLeft: theme.spacing(1)
  }
})

const PostMessages = ({ classes, ...props }) => {

  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    props.fetchAllPostMessages()
  }, [])

  const onDelete = id => {
    const onSuccess = () => {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Post Box"
          content="Deleted successfully"
          scheme={Cinnamon.Crisp.SCHEME_PURPLE}
          icon={<DeleteSweep />}
        />
      })
    }
    if (window.confirm('Are you sure to delete this record?'))
      props.deletePostMessage(id, onSuccess)
  }


  return (
    <Grid container>
      <Grid item xs={10} className={classes.gridAlign}>
        <Paper className={classes.paper}>
          <h1 className={classes.ntxt}>NEW TEXT</h1>
          <PostMessageForm {...{ currentId, setCurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={10} className={classes.gridAlign}>
        <Paper className={classes.paper}>
          <List>
            <h1 className={classes.ntxt} id="view1">VIEW TEXT</h1>
            {
              props.postMessageList.map((record, index) => {
                return (
                  <Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5">
                          {record.title}
                        </Typography>
                        <div>
                          {record.message}
                        </div>
                        <div className={classes.actionDiv}>
                          <Button variant="text" color="primary" size="small"
                            className={classes.smMargin}
                            onClick={() => setCurrentId(record._id)}>
                            <h3>
                              Edit
                            </h3>
                          </Button>
                          <Button variant="text" color="primary" size="small"
                            className={classes.smMargin}
                            onClick={() => onDelete(record._id)}>
                            <h3>
                              Delete
                            </h3>
                          </Button>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <Divider component="li" />
                  </Fragment>
                )
              })
            }
          </List>
        </Paper>
      </Grid>
    </Grid >
  );
}

const mapStateToProps = state => ({
  postMessageList: state.postMessage.list
})

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
  deletePostMessage: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages));