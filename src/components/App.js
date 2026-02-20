import React, { useState } from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
