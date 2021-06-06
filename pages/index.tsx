import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { Layout } from "../components/Layout";

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
                <link href="/common.css" rel="stylesheet" />
            </Head>
            <Layout>
                <div>
                    <Header />
                    <Intro />
                </div>
            </Layout>
        </>
    );
};

export default HomePage;
