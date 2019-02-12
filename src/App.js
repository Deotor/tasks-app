import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Header from "./components/Header";
import MainRouter from "./components/MainRouter";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <MainRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
