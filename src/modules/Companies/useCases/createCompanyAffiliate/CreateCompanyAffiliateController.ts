import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCompanyAffiliateUseCase } from "./CreateCompanyAffiliateUseCase";


class CreateCompanyAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { id_affiliate } = request.body;

        const createCompanyAffiliate = container.resolve(CreateCompanyAffiliateUseCase);

        const companyAffiliate = await createCompanyAffiliate.execute({ 
            id_company: id,
            id_affiliate,
        });

        return response.status(201).json(companyAffiliate);
    }    
}

export { CreateCompanyAffiliateController };