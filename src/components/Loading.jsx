import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Loading = () => {
  return (
    <ListItem>
      <CircularProgress size={34} />
      <ListItemText primary={"Loading..."} />
    </ListItem>
  );
};

export default Loading;
