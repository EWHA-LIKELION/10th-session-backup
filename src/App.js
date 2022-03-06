import React from "react";
import { Route } from "react-router-dom";
import NewsPages from "./pages/NewsPages";

const App = () => {
  return (
    <div>
      <Route path="/:category?" component={NewsPages}/>;
    </div>
  );
};

export default App;