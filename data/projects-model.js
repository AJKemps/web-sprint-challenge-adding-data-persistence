const db = require("../data/db-config.js");

module.exports = {
  findProjects,
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

function findByResourceId(id) {
  return db("resources").where({ id });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((response) => {
      const id = response[0];

      return findByProjectId(id);
    });
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then((response) => {
      const id = response[0];

      return findByResourceId(id);
    });
}

function findResources() {
  return db("resources");
}

function addTask() {
  return db("projects");
}

function findTasks() {
  return db("projects");
}
