using ScreenSound.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScreenSound.Banco
{
    internal class MusicaDAL: DAL<Musica>
    {
        public readonly ScreenSoundContext context;

        public MusicaDAL(ScreenSoundContext context)
        {
            this.context = context;
        }

        public override IEnumerable<Musica> Listar()
        {
            return context.Musicas.ToList();
        }

        public override void Adicionar(Musica musica)
        {
            context.Musicas.Add(musica);
            context.SaveChanges();

        }

        public override void Atualizar(Musica musica)
        {
            context.Musicas.Update(musica);
            context.SaveChanges();

        }

        public override void Deletar(Musica musica)
        {
            context.Musicas.Remove(musica);
            context.SaveChanges();

        }

        public Musica? RecuperarPeloNome(string nome)
        {
            return context.Musicas.FirstOrDefault(a => a.Nome.Equals(nome));

        }



    }
}
