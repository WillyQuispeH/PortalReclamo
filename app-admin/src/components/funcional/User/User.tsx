import React from "react";
import styles from "./User.module.scss";
import { Column } from "@/components/layout/Generic";
import LogoUser from "@/components/ui/LogoUser";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <div className={styles.contenLogo}>
          <LogoUser
            img="https://cooperativa.cl/noticias/site/artic/20161227/imag/foto_0000000320161227143647.jpg"
            width="170px"
          />
        </div>
      </div>
      <Column gap="23px">
        <div className={styles.userAccount}></div>
        <div className={styles.userDelete}></div>
      </Column>
    </div>
  );
};

export default User;
