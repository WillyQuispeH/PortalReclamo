import React from "react";

import Tabs from "@/components/ui/Taps";

import styles from "./Welcome.module.scss";
import ButtonIcon from "@/components/ui/ButtonIcon";

const Welcome = () => {
  const tabs = [
    {
      id: 1,
      title: <h2>Pendientes </h2>,
      content: <h2>Pendientes </h2>,
    },
    {
      id: 2,
      title: <h2>Pendientes </h2>,
      content: <h2>Pendientes </h2>,
    },
    {
      id: 3,
      title: <h2>Pendientes </h2>,
      content: <h2>Pendientes </h2>,
    },
  ];

  const handleOnClick = () => {};
  return (
    <>
      <Tabs tabs={tabs} />

      <div className={styles.contentOption}>
        <ButtonIcon
          onClick={handleOnClick}
          icon="restart_alt"
          typeButton="circle"
        />
      </div>
    </>
  );
};
export default Welcome;
