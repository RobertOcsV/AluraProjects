import CampoTexto from "../CampoTexto";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />
        <CampoTexto label="Time" />
      </form>
    </section>
  );
};
