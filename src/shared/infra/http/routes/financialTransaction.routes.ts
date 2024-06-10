import { Router } from "express";
import { FinancialTransaction } from "modules/FinancialTransaction/infra/typeorm/entities/FinancialTransaction";
import { CreateFinancialTransactionController } from "modules/FinancialTransaction/useCases/CreateFinancialTransaction/CreateFinancialTransactionController";

const transactionRoutes = Router();

const createFinancialTransactionController = new CreateFinancialTransactionController();

transactionRoutes.post("/", createFinancialTransactionController.handle);

export { transactionRoutes };