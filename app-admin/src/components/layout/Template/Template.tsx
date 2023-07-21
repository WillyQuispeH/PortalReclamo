import ScreenMain from "../ScreenMain";
import NavBar from "@/components/ui/NavBar";

import styles from "./Template.module.scss";

const Template = ({ children }: any) => {
  return (
    <ScreenMain>
      <NavBar/>
      <Content>
        {children}
      </Content>
    </ScreenMain>
  );
};

const Content = ({ children }: any) => {
  return <div className={styles.content}>{children}</div>;
};

export default Template;
