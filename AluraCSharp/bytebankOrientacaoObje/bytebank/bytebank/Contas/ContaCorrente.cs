
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank.Contas
{
    public class ContaCorrente
    {
        public int numero_agencia;
        public string conta;
        public Titular.Cliente titular;
        private double saldo;

        public void Depositar(double valor)
        {
            saldo += valor;
        }

        public bool Sacar(double valor)
        {
            if (valor > saldo)
            {
                saldo = saldo;
                Console.WriteLine("valor de saque maior que o cliente possui");
                return false;
            }
            else
            {
                saldo -= valor;
                return true;
            }
        }

        public bool transferir(double valor, ContaCorrente destino)
        {
            if (valor > saldo)
            {
                return false;
            }
            else
            {

                Sacar(valor);
                destino.Depositar(valor);
                return true;
            }

        }

        public void DefinirSaldo(double valor)
        {
            if (valor < 0)
            {
                return;
            }
            else {
              this.saldo = valor;
                
            }

        }

        public double ObterSaldo()
        {
        return  this.saldo;

        }





    }




}
