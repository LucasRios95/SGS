import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDependentUseCase } from "./CreateDependentUseCase";

class CreateDependentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
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

        const createDependentUseCase = container.resolve(CreateDependentUseCase);

        const dependent = await createDependentUseCase.execute({
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

        return response.status(201).json(dependent);
    }
}

export { CreateDependentController };