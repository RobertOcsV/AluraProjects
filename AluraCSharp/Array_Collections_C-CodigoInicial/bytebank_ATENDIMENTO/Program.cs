

using bytebank.Modelos.Conta;

void TestaArrayDeContasCorrentes()
{
    ContaCorrente[] listaDeContas = new ContaCorrente[]
        {
            new ContaCorrente(874, "4232-A"),
            new ContaCorrente(874, "4232-A"),
            new ContaCorrente(874, "4232-A"),


        };

         for (int i = 0; i < listaDeContas.Length; i++)
        {
        ContaCorrente contaAtual = listaDeContas[i];
        Console.WriteLine($" Indice:{i} Conta:{contaAtual.Conta}");
        }

}

TestaArrayDeContasCorrentes();