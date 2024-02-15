import { Router } from "express";
import { CreateAffiliateController } from "modules/Affiliate/useCases/CreateAffiliateController";


const affiliateRoutes = Router();

const createAffiliateController = new CreateAffiliateController();


affiliateRoutes.post("/", createAffiliateController.handle);

export { affiliateRoutes };