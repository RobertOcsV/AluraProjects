
import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem"/>
      <CampoTexto label="Nome" />

     </div> 
  );
}

export default App;
