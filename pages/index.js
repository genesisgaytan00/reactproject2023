import Head from "next/head";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beehive Day Care | Home</title>
        <meta name="keywords" content="homepage" />
      </Head>
      <div className="container">

        <h1 className="title">HOME Page</h1>
        <div className="homepics">
          <img src="/bee1.png" alt="Beehive Logo" />
          <img src="/bee2.png" alt="Beehive Logo" />
          <img src="/bee3.png" alt="Beehive Logo" />
          <img src="/bee4.png" alt="Beehive Logo" />
          <img src="/bee5.png" alt="Beehive Logo" />
          <img src="/bee6.png" alt="Beehive Logo" />
        </div>
        <a href="https://maps.app.goo.gl/cZygBK96xMf3RFT66" className={styles.btn}>
          Get Directions
        </a>
      </div>

    </>
  );
}
