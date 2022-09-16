using System;
class Programa
{

    static void Main(string[] args)
    {
        Console.WriteLine("Executando projeto 10 - Calcula Poupança");

        double investimento = 1000;

        //investimento = investimento + investimento * 0.005;

        
        for (int mes = 1; mes <= 12; mes++) {


            investimento *= 1.005;
            //investimento = investimento + investimento * 0.005;
            Console.WriteLine(investimento);
        }

        Console.WriteLine("Tecle enter para fechar....");
        Console.ReadLine();
    }

}


