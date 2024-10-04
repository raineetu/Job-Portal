import express from "express";
import { registercompany,  getCompany, getCompanyById, updateCompany } from "../controllers/companycontroller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"; 

const router = express.Router();

router.route("/ ").post(isAuthenticated, registercompany);
router.route("/get").post(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
