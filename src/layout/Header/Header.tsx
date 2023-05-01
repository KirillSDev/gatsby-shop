import React, { FC } from "react";
import * as styles from "./Header.module.scss";
import { Button } from "@components/Button/Button";
import { Link, navigate } from "gatsby";
export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <Link to="/" className={styles["title"]}>
        Rick and Morty Shop
      </Link>
      <Button
        onClick={() => {
          navigate("/cart");
        }}
        apperance="unprimary"
        size="middle"
      >
        Cart
      </Button>
    </div>
  );
};
