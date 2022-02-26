import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Cat from "./Cat";

const App = () => {
    return <Cat />;
};
ReactDOM.render(<App />, document.getElementById("app"));
