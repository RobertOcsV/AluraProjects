using ScreenSound.Banco;
using ScreenSound.Modelos;

namespace ScreenSound.Menus;

internal class MenuMostrarArtistas : Menu
{
    public override void Executar(DAL<Artista> artista)
    {
        base.Executar(artista);
        ExibirTituloDaOpcao("Exibindo todos os artistas registradas na nossa aplicação");

        foreach (var compositor in artista.Listar())
        {
            Console.WriteLine($"Artista: {compositor}");
        }

        Console.WriteLine("\nDigite uma tecla para voltar ao menu principal");
        Console.ReadKey();
        Console.Clear();
    }
}
