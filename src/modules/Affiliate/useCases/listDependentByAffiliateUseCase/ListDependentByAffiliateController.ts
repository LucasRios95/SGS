import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDependentByAffiliateUseCase } from "./ListDependentByAffiliateUseCase";


class ListDependentByAffiliateController {
   async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        
        const listDependentByAffilliateUseCase = container.resolve(ListDependentByAffiliateUseCase);

        const dependentsList = await listDependentByAffilliateUseCase.execute(id);

        console.log(dependentsList)

        return response.status(200).json(dependentsList);
    }
}

export { ListDependentByAffiliateController }