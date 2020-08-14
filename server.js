const express = require("express");
const helmet = require("helmet");
const ProjectsRouter = require("./router/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "api is working" });
});

module.exports = server;
