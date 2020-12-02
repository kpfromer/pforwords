import type { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
  schema,
}) => {
  const { createTypes } = actions;
  const typeDefs = [
    'type Mdx implements Node { frontmatter: MdxFrontmatter }',
    // `
    //   interface BottomGallery {
    //     blogName: String!
    //     image: String!
    //   }
    // `,
    // schema.buildObjectType({
    //   name: "BottomGallery",
    //   fields: {
    //     blogName: "String!",
    //     image: "String!",
    //   },
    // }),
    schema.buildObjectType({
      name: 'MdxFrontmatter',
      fields: {
        categories: {
          type: '[String!]',
          resolve(source, args, context, info) {
            const { categories } = source;
            if (categories == null || (Array.isArray(categories) && !categories.length)) {
              return ['uncategorized'];
            }
            return categories;
          },
        },
        // bottomGallery: {
        //   type: "[BottomGallery]",
        //   resolve(source, args, context, info) {
        //     const { bottomGallery } = source
        //     if (
        //       bottomGallery == null ||
        //       (Array.isArray(bottomGallery) && !bottomGallery.length)
        //     ) {
        //       return []
        //     }
        //     return bottomGallery
        //   },
        // },
      },
    }),
  ];
  createTypes(typeDefs);
};

export default createSchemaCustomization;
