import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("user", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
