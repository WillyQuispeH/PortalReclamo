import React from "react";
import styles from "./ClaimType.module.scss";

interface IClaimType {
  width: string;
}

const ClaimType = ({ width }: IClaimType) => {
  return (
    <div className={styles.claimType} style={{ width }}>
      <span className="material-symbols-outlined">accessibility</span>
    </div>
  );
};

export default ClaimType;
