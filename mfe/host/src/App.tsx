import React, { FC, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

import Home from "./Home";

import "./remote-decls.d";

const SuspensedMFE: FC<{
    MFE: React.LazyExoticComponent<React.ComponentType<any>>;
}> = ({ MFE }) => (
    <Suspense fallback={<>Loading...</>}>
        <MFE />
    </Suspense>
);

const Cat = lazy(() => import("cat-mf/Cat"));
const Dog = lazy(() => import("dog-mf/Dog"));
const Squirrel = lazy(() => import("squirrel-mf/Squirrel"));

const App = () => (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cat" element={<SuspensedMFE MFE={Cat} />} />
                <Route path="/dog" element={<SuspensedMFE MFE={Dog} />} />
                <Route
                    path="/squirrel"
                    element={<SuspensedMFE MFE={Squirrel} />}
                />
            </Routes>
        </Router>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
