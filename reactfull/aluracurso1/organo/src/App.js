import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"></Time>
      <Time nome="Frontend"></Time>
      <Time nome="Data Science"></Time>
     </div> 
  );
}

export default App;
