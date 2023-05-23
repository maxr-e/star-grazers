const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        bookId: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input BookInput {
        title: String
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
    }

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
        saveBook(
            bookData: BookInput!
            ): User
        removeBook(
            bookId: String!
            ): User
    }`;
    module.exports = typeDefs