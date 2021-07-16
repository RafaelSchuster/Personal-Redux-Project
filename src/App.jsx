import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import dataStore from "./store";

function App() {
  return (
    <Provider store={dataStore}>
      <Main />
    </Provider>
  );
}

export default App;
