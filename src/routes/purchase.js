import express from "express";
import { createPurchase} from "../controllers/purchase.js";

const router = express.Router();

router.post("/", createPurchase);

export default router;
