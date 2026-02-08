import Project from "../models/project.model.js";

// get all project

export const getProject = async (req, res) => {
  try {
    const result = await Project.find();
    res
      .status(200)
      .json({ message: "Fetch project succesfully", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

// post project

export const createProject = async (req, res) => {
  try {
    const result = await Project.create(req.body);
    res
      .status(200)
      .json({ message: "Insert project successfully", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

//update project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: "Failed to update project" });
  }
};

// delete project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
