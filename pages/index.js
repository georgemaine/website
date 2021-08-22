/* eslint-disable @next/next/no-img-element */
import styles from "../components/styles.module.css";
import Link from "next/link";
import GlobalNav from "../components/GlobalNav";

export default function Components() {
  return (
    <>
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
          paddingLeft: "7vw",
          paddingRight: "7vw",
          paddingTop: "12vw",
        }}
      >
        <p
          style={{
            color: "var(--grey)",
            fontSize: 21,
            lineHeight: "2.3rem",
            marginBottom: 12,
          }}
        >
          Text styles
        </p>
        <h1
          className={styles.largeTitle}
          style={{
            margin: "0 0 12px",
          }}
        >
          Large title
        </h1>
        <p
          className={styles.largeBody}
          style={{
            margin: "0 0 12px",
          }}
        >
          Large body
        </p>
        <h3
          className={styles.headline}
          style={{
            margin: "0 0 12px",
          }}
        >
          Headline
        </h3>
      </main>
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
          paddingLeft: "7vw",
          paddingRight: "7vw",
          overflowX: "scroll",
        }}
      >
        <p
          style={{
            color: "var(--grey)",
            fontSize: 21,
            lineHeight: "2.3rem",
            marginBottom: 12,
          }}
        >
          Interactive elements
        </p>
        <p
          className={styles.largeBody}
          style={{
            margin: "0 0 12px",
          }}
        >
          <Link href='/'>
            <a className={styles.largeTextLink}>Large text link</a>
          </Link>
        </p>

        <Link href='/'>
          <a className={styles.textlink}>Text link</a>
        </Link>
        <figure
          className={styles.MediaTile}
          style={{
            marginTop: 12,
          }}
        >
          <img
            src={"/media/plant.jpeg"}
            alt='Phyllanthus Mirabilis'
            style={{
              width: "auto",
              height: "80vh",
              maxHeight: "859px",
            }}
          />
          <figcaption className={styles.largeBody}>
            Phyllanthus Mirabilis. 2021.
          </figcaption>
        </figure>
      </main>

      <GlobalNav />
    </>
  );
}
