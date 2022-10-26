using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank
{
    public class ContaCorrente
    {
        public int numero_agencia;
        public string conta;
        public string titular;
        public double saldo;

        public void Depositar(double valor)
        {
            this.saldo += valor;
        }

        public bool Sacar(double valor)
        {
            if (valor > this.saldo)
            {
                this.saldo = saldo;
                Console.WriteLine("valor de saque maior que o cliente possui");
                return false;
            }
            else {
                this.saldo -= valor;
                return true;
            }
            
           

        }





    }




}
