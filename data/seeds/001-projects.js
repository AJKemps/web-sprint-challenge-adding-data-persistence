exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "First Project",
          description: "first project description",
          completed: false,
        },
        {
          name: "Second Project",
          description: "Second project description",
          completed: false,
        },
        {
          name: "Third Project",
          description: "Third project description",
          completed: false,
        },
      ]);
    });
};
