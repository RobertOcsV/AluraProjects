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
        public Cliente titular;
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

        public bool transferir(double valor, ContaCorrente destino)
        {
            if (valor > this.saldo)
            {
                return false;
            }
            else {

                this.Sacar(valor);
                destino.Depositar(valor);
                return true;
            }

        }




    }




}
