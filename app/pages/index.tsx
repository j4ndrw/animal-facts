import Layout from "../components/Layout";

const IndexPage = () => {
    return (
        <div>
            <Layout title="Animal Facts | Home" />
            <h1>Main app</h1>
            <pre>{JSON.stringify(catFact.data, null, 2)}</pre>
        </div>
    );
};

export default IndexPage;
