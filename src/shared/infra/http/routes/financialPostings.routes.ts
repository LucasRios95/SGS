import { Router } from "express";
import { DeleteAffiliateController } from "modules/Affiliate/useCases/deleteAffiliate/DeleteAffiliateController";
import { ApplyFineController } from "modules/FinancialPostings/useCases/ApplyFine/ApplyFineController";
import { CreateCategoryController } from "modules/FinancialPostings/useCases/createCategory/CreateCategoryController";
import { CreateFinancialPostingController } from "modules/FinancialPostings/useCases/createFinancialPosting/CreateFinancialPostingController";
import { DeleteFinancialPostingController } from "modules/FinancialPostings/useCases/deleteFinancialPosting/DeleteFinancialPostingController";
import { DeleteFinancialPostingUseCase } from "modules/FinancialPostings/useCases/deleteFinancialPosting/DeleteFinancialPostingUseCase";
import { EditFinancialPostingController } from "modules/FinancialPostings/useCases/editFinancialPosting/EditFinancialPostingController";
import { ListCategoriesController } from "modules/FinancialPostings/useCases/listCategories/ListCategoriesController";
import { ListFinancialPostingController } from "modules/FinancialPostings/useCases/listFinancialPosting/ListFinancialPostingController";

const financialRoutes = Router();

const createFinancialPostingController = new CreateFinancialPostingController();
const listFinancialPostingController = new ListFinancialPostingController();
const editFinancialPostingController = new EditFinancialPostingController();
const deleteFinancialPostingController = new DeleteFinancialPostingController();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const applyFineController = new ApplyFineController();

financialRoutes.post("/", createFinancialPostingController.handle);
financialRoutes.get("/", listFinancialPostingController.handle);
financialRoutes.put("/:id", editFinancialPostingController.handle);
financialRoutes.delete("/:id", deleteFinancialPostingController.handle);
financialRoutes.post("/categories", createCategoryController.handle);
financialRoutes.get("/categories", listCategoriesController.handle);
financialRoutes.get("/applyFine", applyFineController.handle);

export { financialRoutes };

