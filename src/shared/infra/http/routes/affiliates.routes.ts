import { Router } from "express";
import { CreateDependentController } from "modules/Affiliate/useCases/createDependent/CreateDependentController";
import { CreateAffiliateController } from "modules/Affiliate/useCases/createAffiliate/CreateAffiliateController";
import { ListAffiliateController } from "modules/Affiliate/useCases/listAffiliate/ListAffiliateController";
import { ListDependentController } from "modules/Affiliate/useCases/listDependent/ListDependentController";
import { ListDependentByAffiliateController } from "modules/Affiliate/useCases/listDependentByAffiliateUseCase/ListDependentByAffiliateController";



const affiliateRoutes = Router();

const createAffiliateController = new CreateAffiliateController();
const listAffiliateController = new ListAffiliateController();
const createDependentController = new CreateDependentController();
const listDependentController = new ListDependentController();
const listDependentByAffiliateController = new ListDependentByAffiliateController();


affiliateRoutes.post("/", createAffiliateController.handle);
affiliateRoutes.get("/", listAffiliateController.handle);
affiliateRoutes.post("/dependent", createDependentController.handle);
affiliateRoutes.get("/dependents", listDependentController.handle);
affiliateRoutes.get("/dependents/:id", listDependentByAffiliateController.handle);

export { affiliateRoutes };