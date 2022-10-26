using bytebank;

ContaCorrente contaDoAndre = new ContaCorrente();

contaDoAndre.titular = "Andre";
contaDoAndre.numero_agencia  = 15;
contaDoAndre.conta = "1234-X";
contaDoAndre.saldo = 100;

Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);

contaDoAndre.Depositar(10);

Console.WriteLine("Saldo da conta do andré= " + contaDoAndre.saldo);