import { Router } from "express";

import { companyRoutes } from "./companies.routes";
import { useContainer } from "typeorm";
import { bankRoutes } from "./banks.routes";

const router = Router();

router.use("/companies", companyRoutes);
router.use("/banks", bankRoutes);

export { router };