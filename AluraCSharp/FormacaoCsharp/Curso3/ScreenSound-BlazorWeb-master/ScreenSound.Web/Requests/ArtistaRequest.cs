using System.ComponentModel.DataAnnotations;

namespace ScreenSound.Web.Requests;
public record ArtistaRequest([Required] string nome, [Required] string bio)
{
    public override string ToString()
    {
        return $"{this.nome}";
    }
}