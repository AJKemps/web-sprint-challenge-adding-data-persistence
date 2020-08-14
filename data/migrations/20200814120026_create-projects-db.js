exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");

      tbl.string("name", 255).notNullable().unique().index();

      tbl.string("description", 2000);

      tbl.boolean("completed");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");

      tbl.string("name", 255).notNullable().unique().index();

      tbl.string("description", 2000);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("description", 2000).notNullable().index();
      tbl.string("notes", 2000);
      tbl.boolean("completed");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("id");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
