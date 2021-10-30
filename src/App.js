import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./source/main";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Main {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
