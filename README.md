**RF** =>  Requistos Funcionais
**RNF** => Requisitos Não Funcionais
**RN** => Regras de Negócio


# CADASTRO DE EMPRESA/ASSOCIAÇÃO
**RF**
- Deve ser possível cadastrar uma nova empresa; ok
- Deve ser possível selecionar a empresa a ser gerenciada; ok

**RN**
- Não deve ser possível cadastrar uma nova empresa cujo cnpj já exista; ok
- Cada empresa tem um perfil único dentro do sistema; ok
- Apenas usuários com perfil de administrador podem cadastrar uma empresa

# CADASTRO DE BANCO
**RF**
- Deve ser possível cadastrar um novo banco; ok

**RN**
- Não deve ser possível realizar o cadastro de um novo banco com um nº de conta que já existe na base de dados; ok

# CADASTRO DE CONTA BANCÁRIA
**RF**
- Deve ser posível cadastrar uma nova conta bancária;  ok
- Deve ser possível associar a conta bancária a um banco; ok
- Deve ser possível associar uma conta bancária a uma empresa/associação; ok
- Deve ser possível listar contas bancárias; ok

**RN**
- Não deve ser possível adicionar mais de uma conta bancária que tenha o mesmo nº de conta; ok
- Deve ser possível cadastrar mais de uma conta bancária para cada empresa/associação; ok
- Cada conta bancária pertence somente a um único banco e a uma única empresa; ok

# CADASTRO DE FILIADO
**RF**
- Deve ser possível cadastrar um novo filiado; ok
- Deve ser possível alterar o cadastro de um filiado; ok
- Deve ser possível deletar um filiado; ok
- Deve ser possível listar os filiados; ok

**RN**
- Cada filiado pode estar associado a uma ou mais empresa/associação; ok
- O filiado pode ser pessoa física ou jurídica; ok
- Não deve ser possível cadastrar novos filiados com cnpj/cpf que já existam dentro do sistema; ok
- O filiado deve ter um status de ativo/inativo dentro do sistema; ok
- Somente o usuário administrador deve conseguir alterar o cadastro de um filiado; 
- Somente o usuário administrador deve conseguir remover um filiado;

# CADASTRO DE DEPENDENTE
**RF**
- Deve ser possível cadastrar um novo dependente;  ok
- Deve ser possível alterar o cadastro de dependente;
- Deve ser possível excluir o dependente; ok
- Deve ser possível listar dependentes por filiado; ok

**RN**
- Cada dependente de estar associado a um filiado; ok
- Não deve ser possível associar um dependente a mais de um filiado; ok
- Somente o usuário administrador deve conseguir alterar o cadastro de um dependente; 
- Somente o usuário administrador deve conseguir remover um dependente; 

# CADASTRO DE CATEGORIA FINANCEIRA

**RF**
- Deve ser possível cadastrar uma nova categoria; ok
- Deve ser possível listar todas as categorias; ok
- Deve ser possível excluir uma categoria; 

**RN**
- Somente um usuário administrador deve conseguir remover uma categoria;
- Uma categoria só pode ser removida caso não esteja ligada a nenhum lancamento financeiro;

# LANCAMENTO FINANCEIRO

**RF**
- Deve ser possível cadastrar um novo Lançamento Financeiro a receber;
- Deve ser possível cadastrar um novo lançamento financeiro a pagar;
- Deve ser possível excluir um lançamento financeiro;
- Deve ser possível alterar um lançamento financeiro;

**RN**
- Cada lançamento deve possuir uma categoria;
- Cada lançamento deve estar relacionada a uma conta bancária;
- Um lançamento cuja baixa já tenha sido feita, não poderá ser excluído;


# BAIXA DO LANCAMENTO FINANCEIRO

**RF**
- Deve ser possível cadastrar uma baixa para cada lançamento realizado.
- Deve ser possível alterar a baixa de um lancamento. 
- Deve ser possível exlcuir uma baixa

**RN**
- Em caso de pagamento parcial a baixa não altera o status do lançamento mas altera seu valor;
- Cada baixa deve gerar um comprovante no formato pdf;


# CADASTRO DE PLANO DO SINDICATO

**RF**
- Deve ser Possível cadastrar um novo plano; 
- Deve ser Possível alterar um plano;
- Deve ser possível excluir um plano;

**RN**
- O plano deve ser mensal, trimestral ou anual; 
- Cada plano deve possuir um filiado ativo; 
- Cada plano cadastrado deve obrigatoriamente gerar um Contas a receber com o valor cadastrado;
- O lançamento a receber deve ser gerado de acordo com o tipo escolhido

# EXTRATO BANCÁRIO

**RF**

**RN**

