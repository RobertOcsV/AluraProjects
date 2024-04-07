using ScreenSound.Modelos;
using System.ComponentModel.DataAnnotations;

namespace ScreenSound.API.Requests
{
    public record MusicaRequest([Required] string nome, [Required] int ArtistaId, int anoLancamento);

}
