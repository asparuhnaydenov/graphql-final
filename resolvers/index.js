const userResolver = require('./user');
const taskResolver = require('./task');
const userjobResolver = require('./userjob')

module.exports = [
  userResolver,
  taskResolver,
  userjobResolver
];