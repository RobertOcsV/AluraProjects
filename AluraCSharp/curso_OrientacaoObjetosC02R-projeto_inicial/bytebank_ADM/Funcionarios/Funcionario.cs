
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.Funcionarios
{
    public class Funcionario
    {
        public string Nome { get; set; }
        public string Cpf{ get; set; }
        public double Salario { get; set; }
        

        public double GetBonificacao()
        {
            return this.Salario * 0.10; 
        }


        

        //public Funcionario(string nome, string cpf, double salario)
        //{
        //    Nome = nome;
        //    Cpf = cpf;
        //    Salario = salario;
            
        //}

       

    }
}
