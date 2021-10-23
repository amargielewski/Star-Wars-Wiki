import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Planets from "./views/Planets";
import Films from "./views/Films";
import UserPageTemplate from "./templates/UserPageTemplate";
import { paths } from "./utils/paths";

const App = () => (
  <BrowserRouter>
    <UserPageTemplate>
      <Navbar />
      <Switch>
        <Route exact path={paths.home}>
          <Home />
        </Route>
        <Route exact path={paths.characters}>
          <Characters />
        </Route>
        <Route exact path={paths.planets}>
          <Planets />
        </Route>
        <Route exact path={paths.films}>
          <Films />
        </Route>
      </Switch>
    </UserPageTemplate>
  </BrowserRouter>
);

export default App;
