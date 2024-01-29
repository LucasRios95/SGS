import { Router } from "express";
import { CreateBankAccountController } from "modules/BankAccount/useCases/createBankAccount/CreateBankAccountController";
import { DeleteBankAccountController } from "modules/BankAccount/useCases/deleteBankAccount/DeleteBankAccountController";
import { ListBankAccountController } from "modules/BankAccount/useCases/listBankAccount/ListBankAccountController";

const bankAccountRoutes = Router();

const createBankAccountController = new CreateBankAccountController();
const listBankAccountController = new ListBankAccountController();
const deleteBankAccountController = new DeleteBankAccountController();

bankAccountRoutes.post("/", createBankAccountController.handle);
bankAccountRoutes.get("/", listBankAccountController.handle);
bankAccountRoutes.delete("/delete/:account_number", deleteBankAccountController.handle);


export { bankAccountRoutes };
