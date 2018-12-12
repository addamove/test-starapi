import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Persons from "./components/Persons";
import NoRoute from "./components/NoRoute";
const Person = lazy(() => import("./components/Person"));

const router = () => {
  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <Switch>
        <Route
          exact
          path="/persons"
          component={props => <Persons {...props} />}
        />
        <Route exact path="/" component={props => <Persons {...props} />} />
        <Route path="/person" component={props => <Person {...props} />} />
        <Route component={props => <NoRoute {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default router;
