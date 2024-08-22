import { Router } from 'express';
import { CreateUnionPlanController } from 'modules/UnionPlans/useCases/createUnionPlanUseCase/CreateUnionPlanController';
import { ListUnionPlanController } from 'modules/UnionPlans/useCases/listUnionPlanUseCase/ListUnionPlanController';

const unionPlanRoutes = Router();

const createUnionPlanController = new CreateUnionPlanController();
const listUnionPlanController = new ListUnionPlanController();

unionPlanRoutes.post("/", createUnionPlanController.handle);
unionPlanRoutes.get("/", listUnionPlanController.handle);

export { unionPlanRoutes };