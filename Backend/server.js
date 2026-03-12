import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

// db connected
connectDB();

export default app;
