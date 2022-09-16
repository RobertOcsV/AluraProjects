using bytebank;
using byteBank.Titular;

namespace bytebank {

    public class ContaCorrente
    {


        //get and sets autoimplements, just works when they have one condition,  similiar then (if else) abreviations

        public Cliente Titular { get; set; }

        private string _conta;
        public string conta {

            get
            {
                return _conta;
            }
            set
            {
                if (value == null)
                {
                    return;
                }
                else
                {
                    _conta = value;
                }
            }
        
        }

        private int _numero_agencia;
        public int numero_agencia { 
        
            get { return _numero_agencia; }
            set {
                if (_numero_agencia <= 0) {

                }
                else { _numero_agencia = value; }
                
                }
        }
        public string nome_agencia { get; set; }
        private double saldo { get; set; }

        public bool Sacar(double valor) {

            if (saldo < valor || valor < 0)
            {

                return false;
            }
            else 
            { 
                saldo = saldo - valor;
                return true;
            }
        
        }

        public void Depositar(double valor) {

            if (valor < 0)
            {
                Console.WriteLine("valor inexistente");

            }
            else
            {

                saldo = valor + saldo;

            }

        }

        public bool Transferir(double valor, ContaCorrente destino) {

            if (saldo < valor)
            {

                return false;
            }
            else if (valor < 0) 
            { 

                return false;
            }
            else             
            {
                saldo = saldo - valor;
                destino.saldo = destino.saldo + valor;
                return true;
            }


        }

        public ContaCorrente(int numero_agencia, string conta) {

            numero_agencia = numero_agencia;
            conta = conta;
            TotalDeContasCriadas += 1;
        }

        public static int TotalDeContasCriadas { get; set; }

        //encapsulamentos

        public double Saldo
        {
            get 
            {
                return saldo;
            
            }
            set 
            {
                if (value < 0)          
                    return;                
                {
                    saldo = value;                
                }
            }
        
        }

        //public void DefinirSaldo(double valor) {

        //    if (valor < 0) {
        //        return;            
        //    } else
        //    { 
        //        saldo = saldo + valor;
        //    }                   
        //}

        //public double ObterSaldo() {

        //    return saldo;

        //}
    }

    
}