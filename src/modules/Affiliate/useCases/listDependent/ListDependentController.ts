import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDependentUseCase } from "./ListDependentUseCase";


class ListDependentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listDependentUseCase = container.resolve(ListDependentUseCase);

        const dependentsList = await listDependentUseCase.execute();

        return response.status(200).json(dependentsList);
    }
}

export { ListDependentController };