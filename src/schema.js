const typeDefs = `#graphql
  type Product {
   name: String
   stockQuantity: Int  
}         
   type Query {
     product: Product
       }
      `;

   const resolvers = {
     Query: {
       product: () => ({ name: 'Maize Seed', stockQuantity: 50 }),
    },
   };
   module.exports = { typeDefs,  resolvers };