import React, { FC } from "react";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import * as styles from "./Layout.module.scss";
import { Main } from "./Main/Main";
export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
