import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import * as styles from "./cart.module.scss";
const Cart: React.FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <p>Cart under development</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Cart;

export const Head: HeadFC = () => <title>Cart</title>;
