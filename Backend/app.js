import express from "express";
import cors from "cors";
import projectRouter from "./routes/project.route.js";
import contactRouter from "./routes/contact.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/project", projectRouter);
app.use("/contact", contactRouter);

export default app;
