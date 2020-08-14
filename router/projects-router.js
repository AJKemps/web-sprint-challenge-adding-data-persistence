const router = require("express").Router();

const Projects = require("../data/projects-model");

router.get("/", (req, res) => {
  Projects.findProjects({})
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500).json({
        message: "there was an issue while acccessing the projects database",
        error: error.message,
      });
    });
});

router.post("/", (req, res) => {
  let newProject = req.body;

  Projects.addProject(newProject)
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({
        message: "there was an issue while adding a project to the database",
        error: error.message,
      });
    });
});

router.post("/resources", (req, res) => {
  let newResource = req.body;

  Projects.addResource(newResource)
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({
        message: "there was an issue while adding a resource to the database",
        error: error.message,
      });
    });
});

module.exports = router;
