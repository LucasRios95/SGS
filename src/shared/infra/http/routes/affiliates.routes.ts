import { Router } from "express";
import { CreateAffiliateController } from "modules/Affiliate/useCases/CreateAffiliate/CreateAffiliateController";
import { ListAffiliateController } from "modules/Affiliate/useCases/listAffiliate/ListAffiliateController";



const affiliateRoutes = Router();

const createAffiliateController = new CreateAffiliateController();

const listAffiliateController = new ListAffiliateController()


affiliateRoutes.post("/", createAffiliateController.handle);
affiliateRoutes.get("/", listAffiliateController.handle);

export { affiliateRoutes };