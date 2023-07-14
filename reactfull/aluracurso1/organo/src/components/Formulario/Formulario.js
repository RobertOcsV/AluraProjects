import { useState } from 'react';
import Botao from '../Botao'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const times = [

    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'


  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={nome}
        aoAlterado={valor  => setNome(valor)}
         />
        <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo" 
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Informe o endereço de imagem" 
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
        />       
        <ListaSuspensa 
        label="Time"  
        itens={times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
        >
        </ListaSuspensa>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
