import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {

    // let valor = 'aaa'

    const [valor, setValor] = useState('')

    const aoDigitado = (event) => {
        valor = event.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>            
            <input value={valor}  onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )

}

