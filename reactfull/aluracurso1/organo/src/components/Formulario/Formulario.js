import Botao from '../Botao'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = () => {

  const times = [

    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Inovação e Gestão'


  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')

  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />       
        <ListaSuspensa label="Time"  itens={times}></ListaSuspensa>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
