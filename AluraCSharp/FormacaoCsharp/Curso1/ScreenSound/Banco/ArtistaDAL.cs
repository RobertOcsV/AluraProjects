using Microsoft.Data.SqlClient;
using ScreenSound.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScreenSound.Banco
{
    internal class ArtistaDAL: DAL<Artista>
    {
        private readonly ScreenSoundContext context;

        public ArtistaDAL(ScreenSoundContext context) : base(context) { }

        public Artista? BuscarPorNome(String nome) {
            return context.Artistas.FirstOrDefault(artista => artista.Nome == nome);
        }
    }
  
}
