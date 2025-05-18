import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Contador } from './Contador'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Contador/>
  </React.StrictMode>,
)
