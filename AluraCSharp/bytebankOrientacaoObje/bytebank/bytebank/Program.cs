using bytebank;

ContaCorrente contaDoAndre = new ContaCorrente();

contaDoAndre.titular = "Andre";
contaDoAndre.numero_agencia  = 15;
contaDoAndre.conta = "1234-X";
contaDoAndre.saldo = 100;

Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);

ContaCorrente contaDoJorge = new ContaCorrente();

contaDoJorge.titular = "Jorge";
contaDoJorge.numero_agencia = 55;
contaDoJorge.conta = "9826-X";
contaDoJorge.saldo = 230;

Console.WriteLine("Saldo da conta do Jorge= " + contaDoJorge.saldo);

contaDoAndre.transferir(50, contaDoJorge);

Console.WriteLine("Saldo da conta do Jorge= " + contaDoJorge.saldo);
Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);