import { Router } from "express";
import { CreateDependentController } from "modules/Affiliate/useCases/CreateDependent/CreateDependentController";
import { CreateAffiliateController } from "modules/Affiliate/useCases/createAffiliate/CreateAffiliateController";
import { ListAffiliateController } from "modules/Affiliate/useCases/listAffiliate/ListAffiliateController";



const affiliateRoutes = Router();

const createAffiliateController = new CreateAffiliateController();
const listAffiliateController = new ListAffiliateController();
const createDependentController = new CreateDependentController();


affiliateRoutes.post("/", createAffiliateController.handle);
affiliateRoutes.get("/", listAffiliateController.handle);
affiliateRoutes.post("/dependent", createDependentController.handle);

export { affiliateRoutes };