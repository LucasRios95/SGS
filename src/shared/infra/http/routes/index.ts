import { Router } from "express";

import { companyRoutes } from "./companies.routes";
import { bankRoutes } from "./banks.routes";
import { bankAccountRoutes } from "./bankAccounts.routes";
import { affiliateRoutes } from "./affiliates.routes";
import { financialRoutes } from "./financialPostings.routes";
import { transactionRoutes } from "./financialTransaction.routes";
import { unionPlanRoutes } from "./unionPlans.routes";
import { healthCarePlanRoutes } from "./healthCarePlans.routes";

const router = Router();

router.use("/companies", companyRoutes);
router.use("/banks", bankRoutes);
router.use("/bankAccounts", bankAccountRoutes);
router.use("/affiliates", affiliateRoutes);
router.use("/financialPostings", financialRoutes);
router.use("/financialTransaction", transactionRoutes);
router.use("/unionPlan", unionPlanRoutes);
router.use("/healthCarePlan", healthCarePlanRoutes);

export { router };