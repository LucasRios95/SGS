import { Router } from "express";
import { CreateHealthCareAffiliateController } from "modules/Affiliate/useCases/createHealthCareAffiliate/CreateHealthCareAffiliateController";
import { CreateHealthCarePlanController } from "modules/HealthCarePlan/useCases/createHealthCarePlan/CreateHealthCarePlanController";
import { DeleteHealthCarePlanController } from "modules/HealthCarePlan/useCases/deleteHealthCarePlan/DeleteHealthCarePlanController";
import { EditHealthCarePlanController } from "modules/HealthCarePlan/useCases/editHealthCarePlan/EditHealthCarePlanController";
import { ListHealthCarePlanController } from "modules/HealthCarePlan/useCases/listHealthCarePlan/ListHealthCarePlanController";

const healthCarePlanRoutes = Router();

const createHealthCarePlanController = new CreateHealthCarePlanController();
const listHealthCarePlanController = new ListHealthCarePlanController();
const editHealthCarePlanController = new EditHealthCarePlanController();
const deleteHealthCarePlanController = new DeleteHealthCarePlanController();


healthCarePlanRoutes.post("/", createHealthCarePlanController.handle);
healthCarePlanRoutes.get("/", listHealthCarePlanController.handle);
healthCarePlanRoutes.put("/:id", editHealthCarePlanController.handle);
healthCarePlanRoutes.delete("/:id", deleteHealthCarePlanController.handle);


export { healthCarePlanRoutes };