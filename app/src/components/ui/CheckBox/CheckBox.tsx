import React, { useState, useEffect, useCallback } from "react";
import styles from "./Checkbox.module.scss";

const CheckBox = ({ onChange, checked }: any) => {
  return (
    <div className={styles.checkBox}>
      <input
        id="check-1"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="check-1">Aceptar</label>
    </div>
  );
};

export default CheckBox;
