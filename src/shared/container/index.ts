import { container } from "tsyringe";

import { CompaniesRepository } from "modules/Companies/infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { BanksRepository } from "modules/Banks/infra/typeorm/repositories/BanksRepository";
import { IBanksRepository } from "modules/Banks/repositories/IBanksRepository";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { BankAccountsRepository } from "modules/BankAccount/infra/typeorm/repositories/BankAccountsRepository";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { AffiliatesRepository } from "modules/Affiliate/infra/typeorm/repositories/AffiliatesRepository";



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

//IAffiliateRepository
container.registerSingleton<IAffiliatesRepository>(
    "AffiliatesRepository",
    AffiliatesRepository
);
