import { Router } from "express";
import { CreateBankController } from "modules/Banks/useCases/createBank/CreateBankController";
import { ListBankController } from "modules/Banks/useCases/listBank/ListBankController";

const bankRoutes = Router()

const createBankController = new CreateBankController();
const listBankController = new ListBankController();

bankRoutes.post("/", createBankController.handle);
bankRoutes.get("/", listBankController.handle);

export { bankRoutes };