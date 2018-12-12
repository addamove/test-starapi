import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";

import Logo from "../assets/FilmLogo.jpg";
import Planet from "./Planet";
import Loading from "./Loading";
import { Typography } from "@material-ui/core";

const Film = ({ url }) => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);

  const fetchFilm = async mountedRef => {
    try {
      const res = await axios.get(url);

      mountedRef.current && setFilm(res.data);
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
    fetchFilm(mountedRef);
    return () => (mountedRef.current = false);
  }, []);

  return film ? (
    <>
      <ListItem key={1}>
        <ListItemAvatar>
          <Avatar alt={film.title} src={Logo} />
        </ListItemAvatar>
        <ListItemText primary={film.title} />
      </ListItem>
      <List component="div" disablePadding style={{ padding: "1rem" }}>
        {film.planets.map(planet => (
          <Planet url={planet} key={planet} />
        ))}
      </List>
    </>
  ) : (
    <Loading />
  );
};

Film.propTypes = {
  url: PropTypes.string.isRequired
};

export default Film;
