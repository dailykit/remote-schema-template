const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Geo {
    lat: String
    lng: String
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
  type User {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
  }
  type PostResponse {
    status: String
    id: String
  }

  type Query {
    # queryName: TypeName
    getAllUsers: [User]
  }
  type Mutation {
    socialMediaPost(post: String!, platform: [String]!): PostResponse
  }
`;

module.exports = typeDefs;
