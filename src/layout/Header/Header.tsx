import React, { FC } from "react";
import * as styles from "./Header.module.scss";
import { Button } from "@components/Button/Button";
export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Gatsby Shop</div>
      <Button apperance="unprimary" size="middle">
        Cart
      </Button>
    </div>
  );
};
