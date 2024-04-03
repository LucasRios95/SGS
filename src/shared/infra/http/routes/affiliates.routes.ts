import { Router } from "express";
import { CreateDependentController } from "modules/Affiliate/useCases/createDependent/CreateDependentController";
import { CreateAffiliateController } from "modules/Affiliate/useCases/createAffiliate/CreateAffiliateController";
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


affiliateRoutes.post("/", createAffiliateController.handle);
affiliateRoutes.get("/", listAffiliateController.handle);
affiliateRoutes.put("/:id", editAffiliateController.handle);
affiliateRoutes.delete("/:id", deleteAffiliateController.handle);
affiliateRoutes.post("/dependent", createDependentController.handle);
affiliateRoutes.get("/dependents", listDependentController.handle);
affiliateRoutes.get("/dependents/:id", listDependentByAffiliateController.handle);
affiliateRoutes.put("/dependents/:id", editDependentController.handle);
affiliateRoutes.delete("/depedents/:id", deleteDependentController.handle);

export { affiliateRoutes };