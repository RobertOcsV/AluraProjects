using System;
class Programa
{

    static void Main(string[] args)
    {
        Console.WriteLine("Executando projeto 10 - Calcula Poupança");

        double investimento = 1000;

        //investimento = investimento + investimento * 0.005;
        
        Console.WriteLine(investimento);
        int mes = 1;
        while ( mes <= 12) {

            investimento = investimento + investimento * 0.005f;
            Console.WriteLine(investimento + " mês:" + mes);
            mes ++;

        }

        Console.WriteLine("Tecle enter para fechar....");
        Console.ReadLine();
    }

}


