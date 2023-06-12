import express from "express";
import productRouter from "./product";
import authRouter from "./auth";
import categoryRouter from "./category";
import purchaseRouter from "./purchase";

const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/purchase", purchaseRouter);

export default router;
