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
     
    }
}
