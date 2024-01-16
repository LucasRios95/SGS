import { Router } from "express";

import { CreateCompanyController } from "modules/Companies/useCases/createCompany/CreateCompanyController";
import { ListCompaniesController } from "modules/Companies/useCases/listCompanies/ListCompaniesController";

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

companyRoutes.post("/", createCompanyController.handle);
companyRoutes.get("/", listCompaniesController.handle);

export { companyRoutes };