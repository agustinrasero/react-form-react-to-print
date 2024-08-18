import React from 'react'
import { datos } from '../data/data'
import { Link } from 'react-router-dom'
import { Contexto } from '../context/Contexto'
import { useContext } from 'react'





const Lugares = () => {

  const valor = (e) =>{
    setLugar(e.target.value)
  }

  const {lugar,setLugar} = useContext(Contexto)


    const map = datos.map(value => <div className='lugar' key={value.lugar}>
        <input onClick={valor} name='options' type="radio" value={value.lugar}/>
        <h4>{value.lugar}</h4>
        <h4>({value.precio})</h4>
        <img src={value.imagen} alt='imagen del lugar'/>
    </div>)
  return (
    <>
      <div className='seleccion'>
        <h3>Seleccione la zona a visitar:</h3> <Link to={`/miviaje/${lugar}`} className='button'>Enviar</Link>
      </div>
      <div className='viajes'>
        {map}
      </div>
    </>
    
      
    
  )
}

export default Lugares
