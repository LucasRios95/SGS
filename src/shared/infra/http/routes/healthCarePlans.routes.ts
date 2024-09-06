import { Router } from "express";
import { CreateHealthCarePlanController } from "modules/HealthCarePlan/useCases/createHealthCarePlanUseCase/CreateHealthCarePlanController";
import { DeleteHealthCarePlanController } from "modules/HealthCarePlan/useCases/deleteHealthCarePlanUseCase/DeleteHealthCarePlanController";
import { EditHealthCarePlanController } from "modules/HealthCarePlan/useCases/editHealthCarePlanUseCase/EditHealthCarePlanController";
import { ListHealthCarePlanController } from "modules/HealthCarePlan/useCases/listHealthCarePlanUseCase/ListHealthCarePlanController";

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