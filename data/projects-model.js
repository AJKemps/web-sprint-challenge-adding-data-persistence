const db = require("../data/db-config.js");

module.exports = {
  findProjects,
  findByProjectId,
  addProject,
  addResource,
  findResources,
  addTask,
  findTasks,
};

function findProjects() {
  return db("projects");
}

function findByProjectId(id) {
  return db("projects").where({ id });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((response) => {
      const id = response[0];

      return findByProjectId(id);
    });
}

function addResource() {
  return db("projects");
}

function findResources() {
  return db("projects");
}

function addTask() {
  return db("projects");
}

function findTasks() {
  return db("projects");
}
