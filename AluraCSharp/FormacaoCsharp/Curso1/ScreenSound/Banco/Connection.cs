using Microsoft.Data.SqlClient;
using ScreenSound.Modelos;


namespace ScreenSound.Banco
{
    internal class Connection
    {
        private string connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=ScreenSound;Integrated Security=True;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";

        public SqlConnection ObterConexão() { 
            return new SqlConnection(connectionString);
        }

        public IEnumerable<Artista> Listar()
        {
            var lista = new List<Artista>();
            using var connection = ObterConexão();
            connection.Open();

            string sql = "SELECT * FROM Artistas";

            SqlCommand command = new SqlCommand(sql, connection);
            using SqlDataReader dataReader = command.ExecuteReader();

            while( dataReader.Read())
            {
                string nomeArtista = Convert.ToString(dataReader["Nome"]);
                string bioArtista = Convert.ToString(dataReader["Bio"]);
                int idArtista = Convert.ToInt32(dataReader["Id"]);
                Artista artista = new(nomeArtista, bioArtista) { Id = idArtista };

                lista.Add(artista);
            }

            return lista;
        }

    }
}
