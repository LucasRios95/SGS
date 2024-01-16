import { Router } from "express";
import { CreateBankController } from "modules/Banks/useCases/createBank/CreateBankController";

const bankRoutes = Router()

const createBankController = new CreateBankController();

bankRoutes.post("/", createBankController.handle);

export { bankRoutes };