import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.scss";

const CheckBox = ({ checkboxes, onAllCheckboxesChecked }: any) => {
  const [checkboxState, setCheckboxState] = useState(
    checkboxes.map(() => false)
  );

  useEffect(() => {
    const areAllCheckboxesChecked = checkboxState.every(
      (checkbox: any) => checkbox
    );
    onAllCheckboxesChecked(areAllCheckboxesChecked);
  }, [checkboxState, onAllCheckboxesChecked]);

  const handleCheckboxChange = (index: any) => {
    const updatedCheckboxState = [...checkboxState];
    updatedCheckboxState[index] = !updatedCheckboxState[index];
    setCheckboxState(updatedCheckboxState);
  };

  return checkboxes.map((checkbox: any, index: any) => (
    <div key={index} className={styles.checkbox}>
      <input
        id={`chec${checkbox.id}`}
        type="checkbox"
        checked={checkboxState[index]}
        onChange={() => handleCheckboxChange(index)}
      />
      <label htmlFor={`chec${checkbox.id}`}>{checkbox.label}</label>
      <i style={{ background: checkbox.back }}></i>
    </div>
  ));
};
export default CheckBox;
