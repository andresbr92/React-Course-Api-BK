import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase'



const Boton = styled.button`
  background: --webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f547e 100%);
  background-size:300px;
  font-family:Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2 3rem;
  font-size: 2rem;
  border: 2px solid black;

`

function App() {


  const [frase, guardarFrase] = useState({})


  const consultarAPI = async () => {
    const api = await (await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes'))
    const frase = await api.json()
    guardarFrase(frase[0])
  }

    //cargar una frase
    useEffect(() => { 
      consultarAPI()
    },[])

  return (
    <div>
      <Frase
        frase= {frase}
      />
      <Boton
        onClick={consultarAPI}
      >Obtener frase</Boton>
    </div>
  )
}

export default App;
