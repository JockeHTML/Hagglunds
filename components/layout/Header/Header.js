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
          {linksData.map((data, index) => {
            const { title, link, icon } = data;
            return (
              <li key={index}>
                <a href="#">
                  <Link href={link}>
                    <span>
                      <h4>{title}</h4>
                      <i className={icon}></i>
                    </span>
                  </Link>
                </a>
              </li>
            );
          })}
          <li>
            <GreenButton>Boka nu</GreenButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
