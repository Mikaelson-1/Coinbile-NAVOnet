import express from "express";
import { createNotif } from "../Controller/notif.js";

const router = express.Router();

router.post("/", createNotif);

export default router;
