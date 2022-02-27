import MFE from "../components/arch/MFE";
import Layout from "../components/Layout";

const catHost = process.env.VERCEL_ENV
    ? "https://af-cat-mfe.vercel.app"
    : "http://localhost:3001";

const IndexPage = () => (
    <div>
        <Layout title="Animal Facts | Cat" />
        <MFE name="Cat" host={catHost} />
    </div>
);

export default IndexPage;
