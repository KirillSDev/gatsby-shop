const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      rickAndMorty {
        characters {
          results {
            id
          }
        }
      }
    }
  `);

  result.data.rickAndMorty.characters.results.forEach((character) => {
    createPage({
      path: `/product/${character.id}`,
      component: path.resolve("src/templates/ProductDetails.tsx"),
      context: {
        id: character.id,
      },
    });
  });
};
