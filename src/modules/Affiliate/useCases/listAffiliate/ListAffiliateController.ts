import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAffiliateUseCase } from "./ListAffiliateUseCase";

class ListAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAffiliateUseCase = container.resolve(ListAffiliateUseCase);

        const affiliatesList = await listAffiliateUseCase.execute();

        return response.status(200).json(affiliatesList);
    }
}

export { ListAffiliateController };