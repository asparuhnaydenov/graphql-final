const { users, tasks, userjobs } = require('../constants');

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id)
  },
  Mutation: {
  },
  User: {
    tasks: ({ id }) => tasks.filter(task => task.userId === id),
    userjobs: ({id}) => userjobs.filter(userjob => userjob.userId === id)
  }
}