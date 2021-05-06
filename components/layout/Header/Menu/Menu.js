import React, { useState } from "react";
import classes from "./menu.module.css";
import { footerLinksData } from "../../../../data";
import Link from "next/link";
import Logo from "../../Logo";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {openMenu ? (
        <span className={classes.secondIcon}>
          <i onClick={() => setOpenMenu(!openMenu)} className="fas fa-bars"></i>
        </span>
      ) : (
        <span className={classes.firstIcon}>
          <i onClick={() => setOpenMenu(!openMenu)} className="fas fa-bars"></i>
        </span>
      )}

      <div className={openMenu ? classes.menuOpen : classes.menu}>
        {openMenu ? (
          <ul className={classes.menuLinks}>
            {footerLinksData.map((data, index) => {
              const { link, title } = data;
              return (
                <li key={index}>
                  <p>
                    <Link href={link}>
                      <a onClick={() => setOpenMenu(false)}>{title}</a>
                    </Link>
                  </p>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
