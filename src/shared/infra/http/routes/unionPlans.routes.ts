import { Router } from 'express';
import { CreateUnionPlanController } from 'modules/UnionPlans/useCases/createUnionPlan/CreateUnionPlanController';
import { DeleteUnionPlanController } from 'modules/UnionPlans/useCases/deleteUnion/DeleteUnionPlanController';
import { EditUnionPlanController } from 'modules/UnionPlans/useCases/editUnionPlan/EditUnionPlanController';
import { ListUnionPlanController } from 'modules/UnionPlans/useCases/listUnionPlan/ListUnionPlanController';

const unionPlanRoutes = Router();

const createUnionPlanController = new CreateUnionPlanController();
const listUnionPlanController = new ListUnionPlanController();
const editUnionPlanController = new EditUnionPlanController();
const deleteUnionPlanController = new DeleteUnionPlanController();

unionPlanRoutes.post("/", createUnionPlanController.handle);
unionPlanRoutes.get("/", listUnionPlanController.handle);
unionPlanRoutes.put("/:id", editUnionPlanController.handle);
unionPlanRoutes.delete("/delete/:id", deleteUnionPlanController.handle);


export { unionPlanRoutes };