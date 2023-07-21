import React from "react";

import styles from "./ComboBox.module.scss";

interface IntComboBox {
  width: string;
  label: string;
  data: any;
  valueName: string;
  textName: string;
}

const ComboBox = ({ width, label, data, valueName, textName }: IntComboBox) => {
  return (
    <div className={styles.comboBox} style={{ width }}>
      <label>{label}</label>
      <select>
        {data.map((item: any, idx: number) => (
          <option key={idx} value={item[valueName]}>
            {item[textName]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
