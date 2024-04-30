import { Router } from "express";

import { companyRoutes } from "./companies.routes";
import { useContainer } from "typeorm";
import { bankRoutes } from "./banks.routes";
import { bankAccountRoutes } from "./bankAccounts.routes";
import { affiliateRoutes } from "./affiliates.routes";
import { financialRoutes } from "./financialPostings.routes";

const router = Router();

router.use("/companies", companyRoutes);
router.use("/banks", bankRoutes);
router.use("/bankAccounts", bankAccountRoutes);
router.use("/affiliates", affiliateRoutes);
router.use("/financialPostings", financialRoutes);

export { router };