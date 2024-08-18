import React, { useState } from 'react'
import { Contexto } from './Contexto'

const Provider = ({children}) => {

    const [lugar,setLugar] = useState('');

    const [etapa,setEtapa] = useState(0);

    const [precio,setPrecio] = useState(0);

    const [nombre1,setNombre1] = useState("");

    return(
        <Contexto.Provider value={{lugar,setLugar,etapa,setEtapa,precio,setPrecio,nombre1,setNombre1}}>
        {children}
        </Contexto.Provider>
    )
    
}

export default Provider
