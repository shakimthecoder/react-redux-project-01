import React from "react";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import signin from "./pages/signin-andsignout/signinandsignout.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={signin} />
      </Switch>
    </div>
  );
}

export default App;
