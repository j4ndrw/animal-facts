import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserHistory } from "history";

// @ts-ignore
window.renderDog = (containerId: string, history: BrowserHistory) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId)
    );
};

// @ts-ignore
window.unmountHeader = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) ReactDOM.unmountComponentAtNode(container);
};

if (!document.getElementById("mfe-Dog")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
