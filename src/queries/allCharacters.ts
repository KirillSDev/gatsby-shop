import { graphql, useStaticQuery } from "gatsby";
export const useAllCharacters = () => {
  const data = useStaticQuery(graphql`
    query {
      rickAndMorty {
        characters {
          results {
            id
            name
            status
            species
            image
          }
        }
      }
    }
  `);
  return data.rickAndMorty.characters.results;
};
