import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {

    return (

        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}  required={props.obrigatorio} value={props.value}>
                {props.itens.map((item, index) => <option key={item}>{item}</option>)}
            </select>
        </div>

    )

}