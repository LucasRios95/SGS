import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAffiliateUseCase } from "./CreateAffiliateUseCase";

class CreateAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at
        } = request.body;

        const createAffiliateUseCase = container.resolve(CreateAffiliateUseCase);

        const affiliate = await createAffiliateUseCase.execute({
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at
        });

        return response.status(201).json(affiliate);
        
    }

}

export { CreateAffiliateController };