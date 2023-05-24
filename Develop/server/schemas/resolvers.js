const { AuthenticationError } = require('apollo-server-express');
const { User, Star } = require('../models');
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
        users: async () => {
            return User.find();
          },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        stars: async () => {
            return Star.find();
          },
        star: async (_, { title }) => {
            return Star.findOne({ title });
        },
    },
    
    Mutation: {
        //create user
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },        
        loginUser: async (parent, { email, password }) =>  {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user with this email found...")
            }
            const token = signToken(user);
            return { token, user };
        },
        addStar: async (parent, { title, image, description }, context) => {
            if (context.user) {
              const star = await Star.create({
                title, image, description,
                StarAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { stars: star._id } }
              );
      
              return star;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        //remove Star from user's list
        removeStar: async (parent, { StarId }, context) => {
            if (context.user) {
              const star = await Star.findOneAndDelete({
                _id: StarId,
                StarAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { Stars: star._id } }
              );
      
              return star;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
}}


module.exports = resolvers;