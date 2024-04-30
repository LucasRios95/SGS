import { container } from "tsyringe";

import { CompaniesRepository } from "modules/Companies/infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { BanksRepository } from "modules/Banks/infra/typeorm/repositories/BanksRepository";
import { IBanksRepository } from "modules/Banks/repositories/IBanksRepository";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { BankAccountsRepository } from "modules/BankAccount/infra/typeorm/repositories/BankAccountsRepository";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { AffiliatesRepository } from "modules/Affiliate/infra/typeorm/repositories/AffiliatesRepository";
import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { DependentsRepository } from "modules/Affiliate/infra/typeorm/repositories/DependentsRepository";
import { CategoriesRepository } from "modules/FinancialPostings/infra/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "modules/FinancialPostings/repositories/ICategoriesRepository";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { FinancialPostingRepository } from "modules/FinancialPostings/infra/typeorm/repositories/FinancialPostingRepository";

//ICompaniesRepository
container.registerSingleton<ICompaniesRepository>(
    "CompaniesRepository",
    CompaniesRepository
);

//IBanksRepository
container.registerSingleton<IBanksRepository>(
    "BanksRepository",
    BanksRepository
);

//IBankAccountsRepository
container.registerSingleton<IBankAccountsRepository>(
    "BankAccountsRepository",
    BankAccountsRepository
);

//IAffiliatesRepository
container.registerSingleton<IAffiliatesRepository>(
    "AffiliatesRepository",
    AffiliatesRepository
);

//IDependentsRepository
container.registerSingleton<IDependentsRepository>(
    "DependentsRepository",
    DependentsRepository
);

//ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

//IFinancialPostingRepository
container.registerSingleton<IFinancialPostingRepository>(
    "FinancialPostingRepository",
    FinancialPostingRepository
);