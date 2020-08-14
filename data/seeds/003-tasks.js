exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          notes: "First task",
          description: "first task description",
          completed: false,
        },
        {
          project_id: 1,
          notes: "Second task",
          description: "Second task description",
          completed: false,
        },
        {
          project_id: 1,
          notes: "Third task",
          description: "Third task description",
          completed: false,
        },
      ]);
    });
};
