import { Dependent } from "modules/Affiliate/infra/typeorm/entities/Dependent";
import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListDependentUseCase {
    constructor(
        @inject("DependentsRepository")
        private dependentsRepository: IDependentsRepository
    ) {}

    async execute(): Promise<Dependent[]> {
        const dependents = await this.dependentsRepository.list();

        return dependents;
    }
}

export { ListDependentUseCase };