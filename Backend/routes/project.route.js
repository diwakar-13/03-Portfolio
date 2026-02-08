import { Router } from "express";
import {
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";
const projectRouter = Router();

// routes
projectRouter.get("/get", getProject);
projectRouter.post("/add", createProject);
projectRouter.put("/update/:id", updateProject);
projectRouter.delete("/delete/:id", deleteProject);

export default projectRouter;
