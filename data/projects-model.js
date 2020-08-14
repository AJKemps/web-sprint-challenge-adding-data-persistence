const db = require("../data/db-config.js");

module.exports = {
  findProjects,
  addProject,
  addResource,
  findResources,
  addTask,
  findTasks,
  findProjectResources,
};

function findProjects() {
  return db("projects");
}

function findProjectResources() {
  return db("project_resources");
}

function findByProjectId(id) {
  return db("projects").where({ id });
}

function findByTaskId(id) {
  return db("tasks").where({ id });
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

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then((response) => {
      const id = response[0];

      return findByTaskId(id);
    });
}

function findTasks() {
  return db("tasks").innerJoin("projects", "tasks.project_id", "projects.id");
}
