import React from "react";
import styles from "./CardUser.module.scss";
import InputDisabled from "../InputDisabled";
import LogoUser from "../LogoUser";

const CardUser = () => {
  return (
    <div className={styles.cardUser}>
      <LogoUser
        width="60px"
        img="https://cooperativa.cl/noticias/site/artic/20161227/imag/foto_0000000320161227143647.jpg"
      />
      <InputDisabled
        label="Bienvenido"
        width="250px"
        value="Willy Abad Quispe Huamani"
      />
    </div>
  );
};

export default CardUser;
