import Image from "next/image";
import styles from "./styles/main.module.css";
import Head from "next/head";
import { getSortedPostData } from "@/lib/post";
import Link from "next/link";

export default async function Home() {
  const allPostsData = getSortedPostData();

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
          <h2 className={styles.headingLg}>blog</h2>
          <ul className={styles.list}>
            {allPostsData.map(({ id, title, date }) => (
              <li className={styles.listItem} key={id}>
                <a>{title}</a>
                <br />
                <small className={styles.lightText}>{date}</small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
