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


  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />       
        <ListaSuspensa label="Time"  itens={times}></ListaSuspensa>
      </form>
    </section>
  );
};
