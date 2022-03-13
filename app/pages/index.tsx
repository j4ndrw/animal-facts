import { useEffect } from "react";
import Layout from "../components/Layout";

import { trpc } from "../utils/trpc";

const IndexPage = () => {
    return (
        <div>
            <Layout title="Animal Facts | Home" />
            <h1>Main app</h1>
        </div>
    );
};

export default IndexPage;
