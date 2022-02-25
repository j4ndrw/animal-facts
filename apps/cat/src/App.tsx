import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

if (process.env.HOST_ROUTE) window.location.href = process.env.HOST_ROUTE;

const App = () => {
    return <></>;
};
ReactDOM.render(<App />, document.getElementById("app"));
