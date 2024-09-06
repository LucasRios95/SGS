import { Router } from "express";
import { CreateDependentController } from "modules/Affiliate/useCases/CreateDependent/CreateDependentController";
import { CreateAffiliateController } from "modules/Affiliate/useCases/CreateAffiliate/CreateAffiliateController";
import { ListAffiliateController } from "modules/Affiliate/useCases/listAffiliate/ListAffiliateController";
import { ListDependentController } from "modules/Affiliate/useCases/listDependent/ListDependentController";
import { ListDependentByAffiliateController } from "modules/Affiliate/useCases/listDependentByAffiliateUseCase/ListDependentByAffiliateController";
import { EditAffiliateController } from "modules/Affiliate/useCases/editAfilliate/EditAffiliateController";
import { DeleteAffiliateController } from "modules/Affiliate/useCases/deleteAffiliate/DeleteAffiliateController";
import { EditDependentController } from "modules/Affiliate/useCases/editDependent/EditDependentController";
import { DeleteDependentController } from "modules/Affiliate/useCases/deleteDependent/DeleteDependentController";



const affiliateRoutes = Router();

const createAffiliateController = new CreateAffiliateController();
const listAffiliateController = new ListAffiliateController();
const editAffiliateController = new EditAffiliateController();
const deleteAffiliateController = new DeleteAffiliateController();
const createDependentController = new CreateDependentController();
const listDependentController = new ListDependentController();
const listDependentByAffiliateController = new ListDependentByAffiliateController();
const editDependentController = new EditDependentController();
const deleteDependentController = new DeleteDependentController();
const createHealthCareAffiliateController = new CreateAffiliateController();


affiliateRoutes.post("/", createAffiliateController.handle);
affiliateRoutes.get("/", listAffiliateController.handle);
affiliateRoutes.put("/:id", editAffiliateController.handle);
affiliateRoutes.delete("/:id", deleteAffiliateController.handle);
affiliateRoutes.post("/dependents", createDependentController.handle);
affiliateRoutes.get("/dependents", listDependentController.handle);
affiliateRoutes.get("/dependents/:id", listDependentByAffiliateController.handle);
affiliateRoutes.put("/dependents/:id", editDependentController.handle);
affiliateRoutes.post("/healthCarePlans/:id", createHealthCareAffiliateController.handle);
affiliateRoutes.delete("/dependents/:id", deleteDependentController.handle);

export { affiliateRoutes };