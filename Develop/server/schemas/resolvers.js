const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const { sign } = require('jsonwebtoken');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw new AuthenticationError("You are NOT logged in. Log.")
        },
    },
    
    Mutation: {
        loginUser: async (parent, { email, password }) =>  {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user with this email found...")
            }
            const token = signToken(user);
            return { token, user };
        },
        //create user
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        //add book to user's list
        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: {
                        savedBooks: bookData
                    }},
                    { 
                        new: true,
                        runValidators: true,
                    },
                );
              return user;
            }
            throw new AuthenticationError("You need to log in");
        },

        //remove book from user's list
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
              const user = await User.findOneAndUpdate(
                { _id: contex.user._id },
                { $pull: { savedBooks: { bookId } } },
                {
                    new: true,
                    runValidators: true,
                }
              );
              return user;
            }
            throw new AuthenticationError("You still need to log in");
        }
    },
};

module.exports = resolvers;