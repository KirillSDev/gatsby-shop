import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { getPrice } from "../utils/getPrice";
import { Layout } from "../layout/Layout";
import { navigate, Link } from "gatsby";
import { ItemProduct } from "@components/ItemProduct/ItemProduct";
import { Character } from "../interfaces/Product.interface";
import { useAllCharacters } from "@api/allCharacters";
import * as styles from "./index.module.scss";
import { getImage } from "gatsby-plugin-image";
const IndexPage: React.FC<PageProps> = () => {
  const characters = useAllCharacters();
  return (
    <Layout>
      <div className={styles.container}>
        {characters.map((character: Character) => (
          <ItemProduct
            onClick={() => navigate(`/product/${character.id}`)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                navigate(`/product/${character.id}`);
              }
            }}
            product={{
              name: character.name,
              image: character.image,
            }}
            key={character.id + character.name}
            price={getPrice(character.name, character.status)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
