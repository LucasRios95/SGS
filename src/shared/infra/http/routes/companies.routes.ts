import { Router } from "express";

import { CreateCompanyController } from "modules/Companies/useCases/createCompany/CreateCompanyController";
import { CreateCompanyAffiliateController } from "modules/Companies/useCases/createCompanyAffiliate/CreateCompanyAffiliateController";
import { ListCompaniesController } from "modules/Companies/useCases/listCompanies/ListCompaniesController";

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const companyAffiliateController = new CreateCompanyAffiliateController();

companyRoutes.post("/", createCompanyController.handle);
companyRoutes.get("/", listCompaniesController.handle);
companyRoutes.post("/affiliates/:id_affiliate", companyAffiliateController.handle);

export { companyRoutes };