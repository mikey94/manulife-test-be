import express from "express";
import { getInvestments, addInvestment, updateInvestment, deleteInvestment } from "../controllers/investment.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.use(protect);

router.route("/").get(getInvestments).post(addInvestment);

router.route("/:id").delete(deleteInvestment).put(updateInvestment);

export default router;