 void TestaBuscarPalavras()
{
    string[] arrayDePalavras = new string[5];

    for (int i = 0; i < arrayDePalavras.Length; i++)
    {
        Console.WriteLine($"Digite {i + 1} Palavra: ");
        arrayDePalavras[i] = Console.ReadLine();

    }

    Console.WriteLine("Digite palavra a ser encontrada: ");
    var busca = Console.ReadLine();

    foreach (string palavra in arrayDePalavras)
    {
        if (palavra.Equals(busca))
        {
            Console.WriteLine($"Palavra encontrada = {busca}");
            break;
        }
        else
        {
            Console.WriteLine($"Palavra não encontrada");
        }


    }

}