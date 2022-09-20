using System;
class Programa
{

    static void Main(string[] args)
    {


        Console.WriteLine("Executando o projeto 13 - Ecadeando For");


        //*
        //**
        //***
        //****
        //*****


        for (int colunas = 0; colunas <= 10; colunas++)
        {

            for (int linhas = 10; linhas >= 0; linhas--)
            {
                Console.Write("*");
                if (colunas >= linhas) // ou colocamos essa condiçao dentro do for de linhas, daria na mesma solução
                    break;
            }
            Console.WriteLine();
             
        }

    }
}