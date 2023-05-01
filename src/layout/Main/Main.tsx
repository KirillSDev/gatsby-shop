import React, { FC } from "react";
import * as styles from "./Main.module.scss";
import { MainProps } from "./Main.props";
export const Main: FC<MainProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};
