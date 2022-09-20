using System;
class Programa
{

    static void Main(string[] args)
    {

        //Console.WriteLine("Tecle enter para fechar....");
        //Console.ReadLine();
        double fatorRendimento = 1.005;
        double investimento = 1000;


        for (int anos = 1; anos <= 5; anos++)
        {

            for (int mes = 1; mes <= 12; mes++)
            {
                investimento *= fatorRendimento ;

                if (mes == 12)
                {
                    Console.WriteLine("rendimento do ano: " + anos + " foi: " + investimento);
                }
            }

            fatorRendimento += 0.001;

        }

        //for (int anos = 1; anos <= 5; anos++)
        //{
        //    for (int mes = 1; mes <= 12; mes++)
        //    {
        //        investimento *= fatorRendimento;

        //        if (mes == 12)
        //        {
        //            Console.WriteLine("no ano:" + anos + " seu rendimento foi de: " + investimento);
        //        }
        //    }

        //    fatorRendimento += 0.001;

        //}
        //Console.WriteLine("depois de 5 anos vocÊ tera R$ " + investimento);


    }

}


