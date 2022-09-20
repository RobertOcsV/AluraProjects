using byteBank.Titular;
using bytebank;

class Programa
{
    static void Main(string[] args)
    {

        Console.WriteLine("Boas vindas ao seu banco, ByteBank");



        //Cliente cliente = new Cliente();
        //cliente.nome = "Robertin";
        //cliente.cpf = "123413";
        //cliente.profissao = "analista";

        //ContaCorrente conta3 = new ContaCorrente();
        


        //conta3.conta = "23443-x";
        //conta3.numero_agencia = 34;
        //conta3.nome_agencia = "nubank";

        //Cliente jorge = new Cliente();
        //ContaCorrente conta4 = new ContaCorrente(412, "99182");
       
        //conta4.Saldo = 129;
        //conta4.Titular = jorge;
        //Console.WriteLine("Saldo: " + conta4.Saldo);
        //Console.WriteLine(conta4.numero_agencia);
        //Console.ReadKey();




        ContaCorrente conta1 = new ContaCorrente(342, "2343256");
        ContaCorrente conta2 = new ContaCorrente(412, "2343254");
        ContaCorrente conta3 = new ContaCorrente(412, "2343254");
        Console.WriteLine(ContaCorrente.TotalDeContasCriadas);

        Cliente pessoa1 = new Cliente("robert", "34829043", "engenheiro");
        Cliente pessoa2 = new Cliente("robert", "34829043", "engenheiro");
        Cliente pessoa3 = new Cliente("robert", "34829043", "engenheiro");
        Cliente pessoa4 = new Cliente("robert", "34829043", "engenheiro");

        Console.WriteLine(Cliente.TotalDeClientesCad);


    }


}

//ContaCorrente conta1 = new ContaCorrente();
//ContaCorrente conta2 = new ContaCorrente();

//conta1.titular = "Robert";
//conta1.conta = "101023-x";
//conta1.numero_agencia = 23;
//conta1.nome_agencia = "Agencia Central";
//conta1.saldo = 200;

//conta2.titular = "Korge";
//conta2.conta = "101023-x";
//conta2.numero_agencia = 23;
//conta2.nome_agencia = "Agencia Central";
//conta2.saldo = 20;

//Console.WriteLine("Titular: "+ conta1.titular);
//Console.WriteLine("conta: "+ conta1.conta);
//Console.WriteLine("Número da Agência: "+ conta1.numero_agencia);



//Console.WriteLine("Saldo do Robert pré: " + conta1.saldo);
//conta1.Depositar(100);
//Console.WriteLine("Saldo do Robert pós: " + conta1.saldo);

//conta1.Transferir(100, conta2);
//Console.WriteLine("Saldo do Korge pós: " + conta2.saldo);