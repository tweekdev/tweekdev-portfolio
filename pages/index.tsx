import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>tweekdev.io - Portfolio</title>
                <meta
                    name="description"
                    content="tweekdev.io my personal portfolio"
                />
                <meta
                    property="og:description"
                    content="tweekdev.io my personal portfolio"
                    key="ogDescription"
                />
                <meta
                    property="og:title"
                    content={`tweekdev.io - Porfolio`}
                    key="ogTitle"
                />
            </Head>
            <main>
                {" "}
                <Header />
            </main>
        </>
    );
};

export default HomePage;
