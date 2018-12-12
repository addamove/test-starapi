import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Button,
  Typography,
  Slide,
  Paper,
  Grid
} from "@material-ui/core";

import Loading from "./Loading";

const Persons = () => {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`https://swapi.co/api/people/?page=${page}`);

      setPeople(res.data);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  useEffect(
    () => {
      fetchPeople();
    },
    [page]
  );
  return (
    <Slide direction="right" in={true}>
      <Paper>
        <Typography
          noWrap
          align="center"
          gutterBottom
          variant="h2"
          color="secondary"
        >
          Персонажи
        </Typography>
        <List>
          {!people && <Loading />}{" "}
          {people &&
            people.results.map(item => (
              <ListItem key={item.name}>
                <Link to={`/person?search=${item.name}`}>
                  <Button variant="text">{item.name}</Button>
                </Link>
              </ListItem>
            ))}
        </List>
        <Grid container justify="space-between">
          <Button
            color="primary"
            disabled={page === 1}
            variant="outlined"
            onClick={() => {
              // clean previous data
              setPeople(null);
              setPage(prevPage => prevPage - 1);
            }}
          >
            previous
          </Button>
          <Button
            disabled={people && !people.next}
            variant="outlined"
            color="primary"
            onClick={() => {
              // clean previous data
              setPeople(null);
              setPage(prevPage => prevPage + 1);
            }}
          >
            next
          </Button>
        </Grid>
      </Paper>
    </Slide>
  );
};

export default Persons;
