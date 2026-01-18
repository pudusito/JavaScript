import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ejemplo from './Ejemplo.jsx'
import ToDoList from './ToDoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList></ToDoList>
  </StrictMode>,
)

{/*esto es un comentario */}

