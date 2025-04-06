import React from 'react'
import Adicao from './components/Adicao'
import Subtracao  from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


const App = () => {
  return (
    <div>
      <Adicao num1={4}num2={6}/>
      <Subtracao num1={5}num2={3}/>
      <Multiplicacao num1={4}num2={2}/>
      <Divisao num1={25}num2={5}/>
      <PrecisoEstudar nomeDaTecnologia = "React"/>
    </div>

    
  )
}
export default App
