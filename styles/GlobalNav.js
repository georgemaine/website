import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
import styles from "../styles/styles.module.css";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

const GlobalNav = () => (
  <nav>
    <ul className={styles.globalNav}>
      <li>
        <ActiveLink activeClassName={styles.current} href='/'>
          <a className={styles.textlink}>Portfolio</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.current} href='/movie-list'>
          <a className={styles.textlink}>Movie list</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.current} href='/outlet'>
          <a className={styles.textlink}>Outlet</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.current} href='/get-in-touch'>
          <a className={styles.textlink}>Get in touch</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default GlobalNav;
