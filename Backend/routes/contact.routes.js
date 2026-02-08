import { getMessage, sendMessage } from "../controllers/contact.controller.js";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post("/send/message", sendMessage);
contactRouter.get("/get/message", getMessage);

export default contactRouter;
