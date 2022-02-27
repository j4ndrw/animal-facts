import MFE from "./MFE";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Main App</h1>} />
                <Route
                    path="/cat"
                    element={<MFE name="Cat" host="http://localhost:3001" />}
                />
                <Route
                    path="/dog"
                    element={<MFE name="Dog" host="http://localhost:3002" />}
                />
                <Route
                    path="/squirrel"
                    element={
                        <MFE name="Squirrel" host="http://localhost:3003" />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
