import React, { FC } from "react";
import * as styles from "./ItemProduct.module.scss";
import { IProduct } from "./ItemProduct.props";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export const ItemProduct: FC<IProduct> = ({
  product,
  price,
  ...props
}): JSX.Element => {
  const image = product.image;

  return (
    <div tabIndex={0} className={styles.container} {...props}>
      <div className={styles.imgBox}>
        <img
          className={styles.image}
          alt={"image " + product.name}
          src={image}
        ></img>
      </div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.price}>{"$ " + price}</div>
    </div>
  );
};
