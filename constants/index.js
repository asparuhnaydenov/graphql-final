module.exports.tasks = [
  { id: "1", name: "Work", completed: false, userId: "3" },
  { id: "2", name: "Eat", completed: true, userId: "1" },
  { id: "3", name: "Shopping", completed: true, userId: "4" },
  { id: "4", name: "Gym", completed: true, userId: "2" },
];

module.exports.users = [
  { id: "1", name: "kevin", email: "kevin@gmail.com" },
  { id: "2", name: "john", email: "john@gmail.com" },
  { id: "3", name: "peter", email: "peter@gmail.com" },
  { id: "4", name: "bob", email: "bob@gmail.com" },
];

module.exports.userjobs = [
  { id: "1", name: "Construction worker", manager: true, userId: "2" },
  { id: "2", name: "Web developer", manager: false, userId: "1" },
  { id: "3", name: "Software engineer", manager: true, userId: "4"  },
  { id: "4", name: "Truck driver", manager: false, userId: "3"  },
];
