import Colaborador from '../Colaborador'
import './Time.css'

export const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria } /*Ou podemos colocar diretamente no style */
    return (
        
        props.colaboradores.length > 0 ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>      
            <div className='colaboradores'> 
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}      
            </div>
        </section>

        : ''
    )

}