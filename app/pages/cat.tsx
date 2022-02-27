import MFE from "../components/arch/MFE";
import Layout from "../components/Layout";

const catHost = !process.env.LOCAL
    ? "https://af-cat-mfe.vercel.app"
    : "http://localhost:3001";

const IndexPage = () => (
    <div>
        <Layout title="Animal Facts | Cat" />
        <MFE name="Cat" host={catHost} />
    </div>
);

export default IndexPage;
