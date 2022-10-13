


Array amostra = Array.CreateInstance(typeof(double), 5); //outra forma de criar essa array é: new double[5]
amostra.SetValue(5.9,0);
amostra.SetValue(1.4,1);
amostra.SetValue(5.1,2);
amostra.SetValue(2,3);
amostra.SetValue(7.9,4);

TestaMediana(amostra);

void TestaMediana(Array array)
{
    if (array == null || array.Length == 0) 
    {
        Console.WriteLine("Array para cálculo da mediana está vazio ou nulo.");
    }

    double[] numerosOrdenados = (double[])array.Clone();
    Array.Sort(numerosOrdenados);
    //[1.4] [2] [5.1] 

    int tamanho = numerosOrdenados.Length;
    int meio = tamanho / 2;
    double mediana = (tamanho % 2 != 0) ? numerosOrdenados[meio] :
                                                    (numerosOrdenados[meio] + numerosOrdenados[meio - 1]) / 2;
    Console.WriteLine($"Com base na amostra a mediana = {mediana}");
}

