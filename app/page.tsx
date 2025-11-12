import Image from "next/image";

import styles from "./styles/main.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <p>[Reactman704 Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section>
        <h2>blog</h2>

        <ul></ul>
      </section>
    </>
  );
}
