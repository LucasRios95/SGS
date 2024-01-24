import { Router } from "express";
import { CreateBankAccountController } from "modules/BankAccount/useCases/createBankAccount/CreateBankAccountController";
import { ListBankAccountController } from "modules/BankAccount/useCases/listBankAccount/ListBankAccountController";

const bankAccountRoutes = Router();

const createBankAccountController = new CreateBankAccountController();
const listBankAccountController = new ListBankAccountController();

bankAccountRoutes.post("/", createBankAccountController.handle);
bankAccountRoutes.get("/", listBankAccountController.handle);

export { bankAccountRoutes };
