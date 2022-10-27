using bytebank.Contas;
using bytebank.Titular;

//ContaCorrente contaDoAndre = new ContaCorrente();

//contaDoAndre.titular = "Andre";
//contaDoAndre.numero_agencia  = 15;
//contaDoAndre.conta = "1234-X";
//contaDoAndre.saldo = 100;

//Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);

//ContaCorrente contaDoJorge = new ContaCorrente();

//contaDoJorge.titular = "Jorge";
//contaDoJorge.numero_agencia = 55;
//contaDoJorge.conta = "9826-X";
//contaDoJorge.saldo = 230;

//Console.WriteLine("Saldo da conta do Jorge= " + contaDoJorge.saldo);

//contaDoAndre.transferir(50, contaDoJorge);

//Console.WriteLine("Saldo da conta do Jorge= " + contaDoJorge.saldo);
//Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);

//double valor = 300;
//double valor2 = valor;

//Console.WriteLine(valor2 == valor);

Cliente cliente = new Cliente();

cliente.nome = "louise";
cliente.cpf = "1862937-2";
cliente.profissao = "Analista";

ContaCorrente conta = new ContaCorrente();
conta.titular = cliente;

conta.conta = "1082-x";
conta.numero_agencia = 12;
conta.saldo = 192;

Console.WriteLine("titular = " + conta.titular.nome);