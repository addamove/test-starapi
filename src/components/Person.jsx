import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  Grow,
  LinearProgress,
  List,
  CardHeader,
  Slide,
  Button,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";

import Film from "./Film";
import { HomeLink } from "./LinkToHome";

const Persons = ({ location }) => {
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);
  const searchQuery = location.search;

  const fetchPerson = async mountedRef => {
    try {
      const res = await axios.get(`https://swapi.co/api/people/${searchQuery}`);

      mountedRef.current && setPerson(res.data.results[0]);
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
    fetchPerson(mountedRef);
    return () => (mountedRef.current = false);
  }, []);

  return (
    <Slide in={true} direction="left">
      <Card>
        <CardHeader
          action={<Button component={HomeLink}>Back</Button>}
          title={person ? person.name : "Loading..."}
        />
        {!person && <LinearProgress color="secondary" variant="query" />}
        <CardContent>
          <Grow in={Boolean(person)} mountOnEnter unmountOnExit>
            <List component="div">
              {person &&
                person.films.map(film => <Film url={film} key={film} />)}
            </List>
          </Grow>
        </CardContent>
      </Card>
    </Slide>
  );
};

Persons.propTypes = {
  location: PropTypes.string.isRequired
};

export default Persons;
