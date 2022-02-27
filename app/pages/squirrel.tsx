import MFE from "../components/arch/MFE";
import Layout from "../components/Layout";

const squirrelHost = process.env.SQUIRREL_HOST || "http://localhost:3002";

const IndexPage = () => (
    <div>
        <Layout title="Animal Facts | Squirrel" />
        <MFE name="Dog" host={squirrelHost} />
    </div>
);

export default IndexPage;
