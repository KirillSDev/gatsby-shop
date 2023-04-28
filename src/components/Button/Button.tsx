import React, { FC } from "react";
import { IButton } from "./Button.props";
import * as styles from "./Button.module.scss";
import cn from "classnames";

export const Button: FC<IButton> = ({
  children,
  apperance = "primary",
  size = "large",
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button__${size}`],
        styles[`button__${apperance}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
