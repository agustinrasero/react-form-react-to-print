import React, { useContext, useState,useRef} from 'react'
import { datos } from '../data/data'
import { useParams } from 'react-router-dom'
import { data2 } from '../data/data2'
import { useForm } from 'react-hook-form'
import { Contexto } from '../context/Contexto'
import ReactToPrint from 'react-to-print';



const Miviaje = () => {
  const {etapa,setEtapa,precio,setPrecio,nombre1,setNombre1} = useContext(Contexto)
  const {register,handleSubmit,formState:{errors},watch,setFocus,resetField} = useForm();
  const {nombre} = useParams();
  const find = datos.find(value => value.lugar === nombre) 
  const componentRef = useRef();

  if (!find) {
    return <h2>No se encontró ningún lugar correspondiente.</h2>;
  }

  


  const obtenerValores = () =>{
    setEtapa(etapa + 1)
    if (etapa === 1 && etapa < 2) {
      setPrecio(find.precio * Number(watch('dias')))
    }
    if (etapa === 2 ) {
      setPrecio(precio * Number(watch('habitaciones')))
    }
    
    setNombre1(watch('nombre'))
    
  }

  return (
    <>
      
        <div className='formulario'>
        {(etapa >= 3 ) && <h3>Gracias por su reserva!!!</h3>}

        

          <form onSubmit={handleSubmit(obtenerValores)}>

            <div className='comprobar'>{data2[etapa].id && <h3><strong>{watch(data2[etapa].id)}</strong> {data2[etapa].texto} </h3>}</div>
            

        
            <div className="pregunta">
              


              {(etapa < 3) && <label htmlFor={data2[etapa].id}>{data2[etapa].pregunta}</label>}
                {(etapa < 3) && <input id={data2[etapa].id} placeholder={data2[etapa].placeholder} type={data2[etapa].type} autoFocus {...register(data2[etapa].id,
                {
                  required:true,
                  maxLength:15
                }
                )}/>}
            </div>
         





            {(etapa < 3) && <input type='submit'></input>}
            

          </form>
          
          {(etapa >= 3 ) && <ReactToPrint
            trigger={() => <button>Imprimir</button>}
            content={() => componentRef.current}
            pageStyle="@page { size: auto;  margin: 0mm; }" // Esto elimina márgenes en la impresión
            />}

        </div>
        <div className='lugar-seleccionado' ref={componentRef}>
          <h2>Resumen</h2>
          <img src={find.imagen} alt='imagen'/>
          <h3>{find.lugar}</h3>
          <h3>Dolares x dia: ${find.precio}</h3>
          <h3>Nombre: {nombre1}</h3>
          <h3>Dias: {watch('dias')}</h3>
          <h3>Habitaciones: {watch('habitaciones')}</h3>
          <h3>Total: ${precio}</h3>
      </div>
     
    </>
  )
}

export default Miviaje
