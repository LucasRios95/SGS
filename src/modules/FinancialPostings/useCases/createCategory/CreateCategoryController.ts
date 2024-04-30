import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCateogryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            description,
            created_at
        } = request.body;

        const createCateogryUseCase = container.resolve(CreateCateogryUseCase);

        const category = await createCateogryUseCase.execute({
            description,
            created_at
        });

        return response.status(201).json(category);
    }
}

export { CreateCategoryController };