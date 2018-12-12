import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

import Logo from "../assets/Planet.jpg";
import Loading from "./Loading";
import { Typography } from "@material-ui/core";

const Planet = ({ url }) => {
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  const fetchPlanet = async mountedRef => {
    try {
      const res = await axios.get(url);

      mountedRef.current && setPlanet(res.data.name);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    fetchPlanet(mountedRef);
    return () => (mountedRef.current = false);
  }, []);

  return planet ? (
    <ListItem key={1}>
      <ListItemAvatar>
        <Avatar alt={planet} src={Logo} />
      </ListItemAvatar>
      <ListItemText primary={planet} />
    </ListItem>
  ) : (
    <Loading />
  );
};

Planet.propTypes = {
  url: PropTypes.string.isRequired
};

export default Planet;
