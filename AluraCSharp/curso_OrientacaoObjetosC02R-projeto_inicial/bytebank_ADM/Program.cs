
using bytebank_ADM.Funcionarios;
using bytebank_ADM.Utilitario;

Funcionario pedro = new Funcionario();
Diretor Lucas = new Diretor();

pedro.Nome = "Jorge lucas";
pedro.Cpf = "19182728";
pedro.Salario = 2000;


Lucas.Cpf = "2343242";
Lucas.Salario = 5000;
Lucas.Nome = "Lucas";

Console.WriteLine(pedro.Nome);
Console.WriteLine(pedro.GetBonificacao());

GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();
gerenciador.Registrar(pedro);
gerenciador.Registrar(maria);