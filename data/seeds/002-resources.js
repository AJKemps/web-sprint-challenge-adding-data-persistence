exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "First resource",
          description: "first resource description",
        },
        {
          name: "Second resource",
          description: "Second resource description",
        },
        {
          name: "Third resource",
          description: "Third resource description",
        },
      ]);
    });
};
