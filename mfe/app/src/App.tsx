import MFE from "./MFE";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const catHost = process.env.CAT_HOST || "http://localhost:3001";
const dogHost = process.env.DOG_HOST || "http://localhost:3002";
const squirrelHost = process.env.SQUIRREL_HOST || "http://localhost:3003";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Main App</h1>} />
                <Route
                    path="/cat"
                    element={<MFE name="Cat" host={catHost} />}
                />
                <Route
                    path="/dog"
                    element={<MFE name="Dog" host={dogHost} />}
                />
                <Route
                    path="/squirrel"
                    element={<MFE name="Squirrel" host={squirrelHost} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
