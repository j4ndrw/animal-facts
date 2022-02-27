import MFE from "../components/arch/MFE";
import Layout from "../components/Layout";

const dogHost = process.env.VERCEL_ENV
    ? "https://af-dog-mfe.vercel.app"
    : "http://localhost:3002";

const IndexPage = () => (
    <div>
        <Layout title="Animal Facts | Dog" />
        <MFE name="Dog" host={dogHost} />
    </div>
);

export default IndexPage;
