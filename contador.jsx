import { useState } from 'react'

function Contador() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <div className="contador">

      <h1>Contador React 🚀</h1>

      <h2>{contador}</h2>

      <div className="botoes">
        <button onClick={diminuir}>-</button>

        <button onClick={aumentar}>+</button>
      </div>

    </div>
  )
}

export default Contador