import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "./Homepage/Homepage";
import Layout from "./Layout/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unified</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
