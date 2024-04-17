import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAffiliateUseCase } from "./DeleteAffiliateUseCase";

class DeleteAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        console.log(id);
        
        const deleteAffiliateUsecase = container.resolve(DeleteAffiliateUseCase);

        await deleteAffiliateUsecase.execute(id);

        return response.status(200).json({ message: `affiliate sucessfull deleted`});

    }
}

export { DeleteAffiliateController };