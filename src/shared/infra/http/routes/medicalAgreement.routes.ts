import { Router } from "express";
import { CreateMedicalAgreementController } from "modules/MedicalAgreement/useCases/createMedicalAgreement/CreateMedicalAgreementController";
import { DeleteMedicalAgreementController } from "modules/MedicalAgreement/useCases/deleteMedicalAgreement/DeleteMedicalAgreementController";
import { EditMedicalAgreementController } from "modules/MedicalAgreement/useCases/editMedicalAgreement/EditMedicalAgreementController";
import { ListMedicalAgreementController } from "modules/MedicalAgreement/useCases/listMedicalAgreement/ListMedicalAgreementController";


const medicalAgreementRoutes = Router();

const createMedicalAgreementController = new CreateMedicalAgreementController();
const listMedicalAgreementController = new ListMedicalAgreementController();
const editMedicalAgreementController = new EditMedicalAgreementController();
const deleteMedicalAgreementController = new DeleteMedicalAgreementController();

medicalAgreementRoutes.post("/", createMedicalAgreementController.handle);
medicalAgreementRoutes.get("/", listMedicalAgreementController.handle);
medicalAgreementRoutes.put("/:id", editMedicalAgreementController.handle);
medicalAgreementRoutes.delete("/:id", deleteMedicalAgreementController.handle);

export { medicalAgreementRoutes };