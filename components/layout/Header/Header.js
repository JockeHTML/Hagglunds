import React, { useState } from "react";
import classes from "./Header.module.css";
import { linksData } from "../../../data";
import Link from "next/link";
import { dropdownData } from "../../../data.js";
import Logo from "../Logo";

const Header = () => {
  const [active, setActive] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(false);
    }
  };

  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <div className={classes.links}>
          <ul>
            {linksData.map((data, index) => {
              const { title, link } = data;
              return (
                <li key={index}>
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <li className={classes.extra}>
            <Link href="/om-oss">Om oss</Link>
            <i className="fas fa-angle-down"></i>
          </li>

          <div className={active ? classes.activeDropdown : null}>
            <ul>
              {active
                ? dropdownData.map((data, index) => {
                    const { title, link } = data;
                    return (
                      <li onClick={() => setActive(false)} key={index}>
                        <i className="fas fa-angle-right"></i>
                        <Link href={link}>{title}</Link>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
