using JornadaMilhasV1.Modelos;

namespace Jornada.Milhas.Test
{
    public class OfertaViagemTest
    {
        [Fact]
        public void TestandoOfertaValida()
        {
            //cen�rio
            Rota rota = new Rota ("OrigemTeste", "DestinoTeste");
            Periodo periodo = new Periodo(new DateTime(2024, 2, 1), new DateTime(2024, 2, 5));
            double preco = 100.0;
            var validacao = true;

            //a��o
            OfertaViagem oferta = new OfertaViagem(rota, periodo, preco);

            //valida��o
            Assert.Equal(validacao, oferta.EhValido);

        }

        [Fact]
        public void TestandoOfertaRotaNula()
        {
            Rota rota = null;
            Periodo periodo = new Periodo(new DateTime(2024, 2, 1), new DateTime(2024, 2, 5));
            double preco = 100.0;

            OfertaViagem oferta = new OfertaViagem(rota, periodo, preco);

            Assert.Contains("A oferta de viagem n�o possui rota ou per�odo v�lidos.", oferta.Erros.Sumario);
            Assert.False(oferta.EhValido);

        }
    }
}