**RF** =>  Requistos Funcionais
**RNF** => Requisitos Não Funcionais
**RN** => Regras de Negócio


# CADASTRO DE EMPRESA/ASSOCIAÇÃO
**RF**
- Deve ser possível cadastrar uma nova empresa;
- Deve ser possível selecionar a empresa a ser gerenciada;

**RN**
- Não deve ser possível cadastrar uma nova empresa cujo cnpj já exista;
- Cada empresa tem um perfil único dentro do sistema;
- Apenas usuários com perfil de administrador podem cadastrar uma empresa

# CADASTRO DE BANCO
**RF**
- Deve ser possível cadastrar um novo banco;

**RN**
- Não deve ser possível realizar o cadastro de um novo banco com um nº de conta que já existe na base de dados;

# CADASTRO DE CONTA BANCÁRIA
**RF**
- Deve ser posível cadastrar uma nova conta bancária 
- Deve ser possível associar a conta bancária a um banco
- Deve ser possível associar uma conta bancária a uma empresa/associação
- Deve ser possível listar contas bancárias

**RN**
- Não deve ser possível adicionar mais de uma conta bancária que tenha o mesmo nº de conta
- Deve ser possível cadastrar mais de uma conta bancária para cada empresa/associação
- Cada conta bancária pertence somente a um único banco e a uma única empresa

# CADASTRO DE FILIADO
**RF**
- Deve ser possível cadastrar um novo filiado;
- Deve ser possível alterar o cadastro de um filiado;

**RN**
- Cada filiado pode estar associado a uma ou mais empresa/associação;
- O filiado pode ser pessoa física ou jurídica;
- Não deve ser possível cadastrar novos filiados com cnpj/cpf que já existam dentro do sistema;
- O filiado deve ter um status de ativo/inativo dentro do sistema;

# CADASTRO DE DEPENDENTE
**RF**
- Deve ser possível cadastrar um novo dependente;
- Deve ser possível alterar o cadastro de dependente;
- Deve ser possível excluir o dependente;

**RN**
- Cada dependente de estar associado a um filiado;
- Não deve ser possível associar um dependente a mais de um filiado;
-


