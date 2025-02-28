using JornadaMilhas.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JornadaMilhas.Test;

public class ValidacoesMusica
{
    [Fact]
    public void ValidaAnoDeLancamentoMusicaNaoPodeSerNegativo() 
    {

        //arrange
        Musica musica = new Musica("Gangs Style");
        int anoLancamento = -1000;

        //act
        musica.AnoLancamento = anoLancamento;
        
        //assert
        Assert.Null(musica.AnoLancamento);
    }

}
