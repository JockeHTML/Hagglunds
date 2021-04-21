import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import { linksData } from "../../../data";
import Logo from "../Logo";
import GreenButton from "../../ui/GreenButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Logo />
        <ul>
          {linksData.map((link, index) => {
            const { title } = link;
            return (
              <li key={index}>
                <a href="#">
                  <Link href="/">
                    <span>
                      <h4>{title}</h4>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </Link>
                </a>
              </li>
            );
          })}
          <li>
            <a href="">
              <GreenButton>Boka nu</GreenButton>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
