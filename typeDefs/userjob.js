const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
    userjobs: [Userjob!]
    userjob(id: ID!): Userjob
  }

  input createUserjobInput {
    name: String!
    manager: Boolean!
    userId: ID!
  }

  extend type Mutation {
    createUserjob(input: createUserjobInput!): Userjob
  }

  type Userjob {
    id: ID!
    name: String!
    manager: Boolean!
    user: User!
  }
`;