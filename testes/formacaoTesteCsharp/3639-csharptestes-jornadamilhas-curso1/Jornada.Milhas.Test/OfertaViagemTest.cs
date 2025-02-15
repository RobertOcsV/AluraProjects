using JornadaMilhas.Modelos;
using JornadaMilhasV1.Modelos;

namespace Jornada.Milhas.Test
{
    public class OfertaViagemTest
    {
        [Fact]
        public void TestandoOfertaValida()
        {
            //cen�rio
            Rota rota = new Rota("OrigemTeste", "DestinoTeste");
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

        [Fact]
        public void TestandoOfertaComPeriodoInvalido()
        {
            //arrange
            Rota rota = new Rota("OrigemTeste", "DestinoTeste");
            Periodo periodo = new Periodo(new DateTime(2024, 2, 5), new DateTime(2024, 2, 1));
            double preco = 100.0;

            //act
            OfertaViagem oferta = new OfertaViagem(rota, periodo, preco);

            //assert
            Assert.Contains("Erro: Data de ida n�o pode ser maior que a data de volta.", oferta.Erros.Sumario);
            Assert.False(oferta.EhValido);
        }

        [Fact]
        public void TesteNomeInicializadoCorretamente()
        {
            // Arrange
            string nome = "M�sica Teste";

            // Act
            Musica musica = new Musica(nome);

            // Assert
            Assert.Equal(nome, musica.Nome);
        }


        [Fact]
        public void TesteIdInicializadoCorretamente()
        {
            // Arrange
            string nome = "M�sica Teste";
            int id = 13;

            // Act
            Musica musica = new Musica(nome) { Id = id };

            // Assert
            Assert.Equal(id, musica.Id);
        }

        [Fact]
        public void TesteToString()
        {
            // Arrange
            int id = 1;
            string nome = "M�sica Teste";
            Musica musica = new Musica(nome);
            musica.Id = id;
            string toStringEsperado = @$"Id: {id} Nome: {nome}";

            // Act
            string resultado = musica.ToString();

            // Assert
            Assert.Equal(toStringEsperado, resultado);
        }

        [Fact]
        public void TestantoPrecoNegativo()
        {

            //Arrange
            Rota rota = new Rota("Origem1", "Destino1");
            Periodo periodo = new Periodo(new DateTime(2024, 8, 20), new DateTime(2024, 8, 30));
            double preco = -300.0;

            //act
            OfertaViagem oferta = new OfertaViagem(rota, periodo, preco);

            //assert
            Assert.Contains("O pre�o da oferta de viagem deve ser maior que zero.", oferta.Erros.Sumario);
        
        }


    }
}