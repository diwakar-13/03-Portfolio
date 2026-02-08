import mongoose from "mongoose";

// create schema

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
