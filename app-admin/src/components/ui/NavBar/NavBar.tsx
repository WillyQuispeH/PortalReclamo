import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Gestión de documentos</h1>
      <h2>Portal Firma</h2>
    </nav>
  );
};

export default NavBar;
