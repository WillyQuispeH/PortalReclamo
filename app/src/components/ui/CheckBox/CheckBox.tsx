import React, { useState, useEffect, useCallback } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckBox {
  onChange: any;
  checked: boolean;
}

const CheckBox = ({ onChange, checked }: ICheckBox) => {
  return (
    <div className={styles.checkBoxs}>
      <input
        id="check-1"
        type="checkbox"
        checked={!checked}
        onChange={onChange}
      />
      <label htmlFor="check-1">Aceptar</label>
    </div>
  );
};

export default CheckBox;
