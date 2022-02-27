import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserHistory } from "history";

// @ts-ignore
window.renderCat = (containerId: string, history: BrowserHistory) => {
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

if (!document.getElementById("mfe-Cat")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
