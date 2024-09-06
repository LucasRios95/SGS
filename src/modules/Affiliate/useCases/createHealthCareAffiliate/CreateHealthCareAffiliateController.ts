import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateHealthCareAffiliateUseCase } from "./CreateHealthCareAffiliateUseCase";



class CreateHealthCareAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { id_healthCarePlan } = request.body;

        const createHealthCareAffiliateUseCase = container.resolve(CreateHealthCareAffiliateUseCase);

        const HealthCareAffiliate = await createHealthCareAffiliateUseCase.execute({
            id_affiliate: id,
            id_healthCarePlan,
        });

        return response.status(201).json(HealthCareAffiliate);
    }
}

export { CreateHealthCareAffiliateController };