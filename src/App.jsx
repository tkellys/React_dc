import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {inputText} from './componets/inputText';

function App() {
  const [count, setCount] = useState(0)

  return (
   <> 
   <h1>OLÁ MUNDO</h1>
   <inputText/>
   <input type="text" name="nome" id="nome" placeholder='seu nome'/>
   <br />
   <input type="text" name="sobrenome" id="sobrenome" placeholder='seu sobrenome'/>
   </>
  )
}

export default App
