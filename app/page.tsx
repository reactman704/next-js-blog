import Image from "next/image";

import styles from "./styles/main.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Create</title>
        </Head>

        <section className={styles.headingMd}>
          <p>[Reactman704 Introduction]</p>
          <p>(This is a website)</p>
        </section>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h2>blog</h2>
          <ul></ul>
        </section>
      </div>
    </>
  );
}
