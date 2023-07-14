import './Time.css'

export const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria } /*Ou podemos colocar diretamente no style */
    return (
        
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )

}