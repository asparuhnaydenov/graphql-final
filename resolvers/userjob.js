const uuid = require('uuid');

const { users, userjobs } = require('../constants');

module.exports = {
  Query: {
    userjobs: () => {
      return userjobs;
    },
    userjob: (_, { id }) => {
      return userjobs.find(userjob => userjob.id === id)
    },
  },
  Mutation: {
    createUserjob: (_, { input }) => {
      const userjob = { ...input, id: uuid.v4() };
      userjobs.push(userjob);
      return userjob;
    }
  },
  Userjob: {
    user: ({ userId }) => {
      return users.find(user => user.id === userId)
    }
  }
}