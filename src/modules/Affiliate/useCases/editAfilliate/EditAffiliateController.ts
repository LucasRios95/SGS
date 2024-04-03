import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditAffiliateUseCase } from "./EditAffiliateUseCase";


class EditAffiliateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id_affiliate = request.params.id;

        const {
            id,
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at,
        } = request.body;

        const editAffiliateUseCase = container.resolve(EditAffiliateUseCase);

        const affiliateUpdated = await editAffiliateUseCase.execute(id_affiliate, {
            id: id_affiliate,
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at,
        });

        return response.status(200).json(affiliateUpdated);
    }
}

export { EditAffiliateController };