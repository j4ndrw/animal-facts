import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./remote-decls.d";

const Cat = lazy(() => import("cat-mf/Cat"));
const Dog = lazy(() => import("dog-mf/Dog"));
const Squirrel = lazy(() => import("squirrel-mf/Squirrel"));

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<></>}>
            <Cat />
            <Dog />
            <Squirrel />
        </Suspense>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
