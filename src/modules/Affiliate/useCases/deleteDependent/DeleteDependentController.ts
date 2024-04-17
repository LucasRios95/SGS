import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDependentUseCase } from "./DeleteDependentUseCase";


class DeleteDependentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        
        const deleteDependentUsecase = container.resolve(DeleteDependentUseCase);

        await deleteDependentUsecase.execute(id);

        return response.status(200).json({ message: `dependent sucessfull deleted`});

    }
}

export { DeleteDependentController };