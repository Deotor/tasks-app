import React from "react";
import { Switch, Route } from "react-router-dom";
import Todos from "./Todos";

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route path="/todos" component={Todos} />
    </Switch>
  </main>
);

export default MainRouter;
