import { Layout } from "@layout/Layout";
import React, { FC } from "react";
import { getPrice } from "@utils/getPrice";
import { HeadFC, graphql } from "gatsby";
import { CharacterProps } from "@interfaces/Product.interface";
import * as styles from "./ProductDetails.module.scss";
import { Button } from "@components/Button/Button";

export const query = graphql`
  query ($id: ID!) {
    rickAndMorty {
      character(id: $id) {
        name
        status
        species
        gender
        image
      }
    }
  }
`;
const ProductDetails: FC<CharacterProps> = ({ data }) => {
  const { character } = data.rickAndMorty;

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <div className={styles.imgBox}>
            <img
              className={styles.image}
              alt={"image " + character.name}
              src={character.image}
            ></img>
          </div>
        </div>

        <div className={styles.info}>
          <div>{character.name}</div>
          <div>{"Price: $" + getPrice(character.name, character.status)}</div>
          <div>{"Status: " + character.status}</div>
          <div>{"Species: " + character.species}</div>
          <Button apperance={"primary"} size={"large"}>
            Add to Bag
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetails;

export const Head: HeadFC<CharacterProps> = ({ data }) => {
  const { character } = data.rickAndMorty;
  return <title>{character.name}</title>;
};
