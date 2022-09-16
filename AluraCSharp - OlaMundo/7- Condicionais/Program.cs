using System;

class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("7 - Condicionais");


        int idadeJoao = 18;
        Boolean acompanhado = false;

        if (idadeJoao >= 18)
        {
            Console.WriteLine("Pode entrar");
        }
        else
        {

            if (acompanhado == true)
            {
                Console.WriteLine("Pode entrar, você está acompanhado");
            }
            else {
                Console.WriteLine("Não é maior de idade e não está companhado");
            }


        }
        
        
        



        Console.WriteLine("Tecle enter para fechar...");
        Console.ReadLine();
    }


}