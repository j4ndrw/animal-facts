import React from "react";
import Head from "next/head";

type Props = {
    title?: string;
};

const Layout = ({ title = "Animal Facts" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    </div>
);

export default Layout;
