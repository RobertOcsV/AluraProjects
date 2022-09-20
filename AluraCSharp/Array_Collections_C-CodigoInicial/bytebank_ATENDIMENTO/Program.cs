us
//Console.WriteLine("Boas Vindas ao ByteBank, Atendimento.");

//int[] idades = new int[5];

//idades[0] = 33;
//idades[1] = 35;
//idades[2] = 20;
//idades[3] = 37;
//idades[4] = 24;

//Console.WriteLine($"Tamanho do Array {idades.Length}");


//int acumulador = 0;
//for (int i = 0; i < idades.Length; i++) {

//    int idade = idades[i];
//    Console.WriteLine($"indice [{i}] = {idade}");
//    acumulador += idade;

//}
//int media = acumulador / idades.Length;

//Console.WriteLine($"Media de idades = {media}");



void TestaBuscarPalavras() { 
    string[] arrayDePalavras = new string[5];

    for (int i = 0; i < arrayDePalavras.Length; i++)
    {
        Console.WriteLine($"Digite {i+1} Palavra: ");
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