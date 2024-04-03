import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditDependentUseCase } from "./EditDependentUseCase";

class EditDependentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id_dependent = request.params.id;

        const {
            id,
            name,
            birth_date,
            email,
            phone,
            address,
            city,
            uf,
            cep,
            active,
            gender,
            id_affiliate,
            created_at
        } = request.body;

        const editDependentUseCase = container.resolve(EditDependentUseCase);

        const dependentUpdated = await editDependentUseCase.execute(id_dependent, {
            id: id_dependent,
            name,
            birth_date,
            email,
            phone,
            address,
            city,
            uf,
            cep,
            active,
            gender,
            id_affiliate,
            created_at
        });

        return response.status(200).json(dependentUpdated);
    }
}

export { EditDependentController };