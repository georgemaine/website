import styles from "../styles/styles.module.css";
import Link from "next/link";

export default function Components() {
  return (
    <>
      <main
        style={{
          maxWidth: "65vw",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
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
          maxWidth: "65vw",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
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
      </main>
    </>
  );
}
