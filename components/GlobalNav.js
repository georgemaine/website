import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

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

export default function GlobalNav({ onMedia }) {
  return (
    <nav className={onMedia && "onMedia"}>
      <ul>
        <li>
          <ActiveLink activeClassName={"current"} href='/'>
            <a>Portfolio</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName={"current"} href='/movie-list'>
            <a>Movie list</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName={"current"} href='/outlet'>
            <a>Outlet</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName={"current"} href='/get-in-touch'>
            <a>Get in touch</a>
          </ActiveLink>
        </li>
      </ul>
      <style jsx>{`
        a {
          font-weight: 400;
          letter-spacing: -0.014rem;
          color: ${onMedia ? "var(--white)" : "initial"};
          margin: 0 1.2rem;
          transition: opacity 0.2s ease-out;
          opacity: 0.8;
        }

        a:hover {
          opacity: 1;
        }

        a:active {
          opacity: 0.56;
        }
        .current,
        .current:hover {
          opacity: 0.56;
        }

        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 5.4rem;
          margin: 0;
          padding: 0;
          background: ${onMedia ? "transparent" : "rgba(242, 242, 242, 0.9)"};
          backdrop-filter: ${onMedia ? "initial" : "saturate(180%) blur(20px)"};
          z-index: 9999;
        }

        li {
          list-style: none;
        }
      `}</style>
    </nav>
  );
}
