import { Router } from "express";
import { DeleteAffiliateController } from "modules/Affiliate/useCases/deleteAffiliate/DeleteAffiliateController";
import { CreateCategoryController } from "modules/FinancialPostings/useCases/createCategory/CreateCategoryController";
import { CreateFinancialPostingController } from "modules/FinancialPostings/useCases/createFinancialPostingUseCase/CreateFinancialPostingController";
import { DeleteFinancialPostingController } from "modules/FinancialPostings/useCases/deleteFinancialPostingUseCase/DeleteFinancialPostingController";
import { DeleteFinancialPostingUseCase } from "modules/FinancialPostings/useCases/deleteFinancialPostingUseCase/DeleteFinancialPostingUseCase";
import { EditFinancialPostingController } from "modules/FinancialPostings/useCases/editFinancialPostingUseCase/EditFinancialPostingController";
import { ListCategoriesController } from "modules/FinancialPostings/useCases/listCategoriesUseCase/ListCategoriesController";
import { ListFinancialPostingController } from "modules/FinancialPostings/useCases/listFinancialPostingUseCase/ListFinancialPostingController";

const financialRoutes = Router();

const createFinancialPostingController = new CreateFinancialPostingController();
const listFinancialPostingController = new ListFinancialPostingController();
const editFinancialPostingController = new EditFinancialPostingController();
const deleteFinancialPostingController = new DeleteFinancialPostingController();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

financialRoutes.post("/", createFinancialPostingController.handle);
financialRoutes.get("/", listFinancialPostingController.handle);
financialRoutes.put("/:id", editFinancialPostingController.handle);
financialRoutes.delete("/:id", deleteFinancialPostingController.handle);
financialRoutes.post("/categories", createCategoryController.handle);
financialRoutes.get("/categories", listCategoriesController.handle);

export { financialRoutes };

