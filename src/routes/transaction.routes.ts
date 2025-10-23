import express from "express";
import { getTransaction, addTransaction } from "../controllers/transaction.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.use(protect);

router.route("/").get(getTransaction).post(addTransaction);

export default router;
