const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Star {
        _id: ID
        title: String
        description: String
        image: String
        starAuthor: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        stars: [Star]
    }

    // input BookInput {
    //     title: String
    //     authors: [String]
    //     description: String
    //     bookId: String!
    //     image: String
    //     link: String
    // }

    type Mutation {
        addUser(
            username: String!
            email: String!
            password: String!
            ): Auth
        loginUser(
            email: String!
            password: String!
            ): Auth
        createStar(
            title: String!
            description: String!
            image: String
          ): Star
        removeStar(
            title: String!
            ): Star
    }`;
    module.exports = typeDefs