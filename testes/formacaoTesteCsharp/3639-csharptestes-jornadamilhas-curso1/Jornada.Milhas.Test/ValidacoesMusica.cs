using JornadaMilhas.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JornadaMilhas.Test;

public class ValidacoesMusica
{
    [Theory]
    [InlineData(-1000)]
    [InlineData(0)]
    public void ValidaAnoDeLancamentoMusicaNaoPodeSerNegativoOuZero(int anoLancamento)
    {

        //arrange
        Musica musica = new Musica("Gangs Style");

        //act
        musica.AnoLancamento = anoLancamento;

        //assert
        Assert.Null(musica.AnoLancamento);
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    public void RetornaValorDesconhecidoCasoArtistaSejaNuloOuVazio(string artista)
    {

        //arrange
        Musica musica = new Musica("Gangs Style");

        //act
        musica.Artista = artista;

        //assert
        Assert.Equal("Desconhecido", musica.Artista);
    }

}
