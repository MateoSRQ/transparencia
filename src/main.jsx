import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/main'
import Estatutos from './pages/estatutos'
import Actas from './pages/actas'
import Resoluciones from './pages/resoluciones'
import Reglamentos from './pages/reglamentos'
import Estados from './pages/estados'
import Becas from './pages/becas'
import Inversiones from './pages/inversiones'
import Proyectos from './pages/proyectos'
import Alumnos from './pages/alumnos'
import Tarifas from './pages/tarifas'
import Docentes from './pages/docentes'
import Investigacion from './pages/investigacion'
import Academico from './pages/academico'

import Modelo from './pages/modelo'
import Pei from './pages/pei'
import Poi from './pages/poi'

import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/estatutos" element={<Estatutos />} />
              <Route path="/actas" element={<Actas />} />
              <Route path="/resoluciones" element={<Resoluciones />} />
              <Route path="/reglamentos" element={<Reglamentos />} />
              <Route path="/estados" element={<Estados />} />
              <Route path="/becas" element={<Becas />} />
              <Route path="/inversiones" element={<Inversiones />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/alumnos" element={<Alumnos />} />
              <Route path="/tarifas" element={<Tarifas />} />
              <Route path="/Docentes" element={<Docentes />} />
              {/*<Route path="/investigacion" element={<Investigacion />} />*/}
              <Route path="/academico" element={<Academico />} />


              <Route path="/modelo" element={<Modelo />} />
              <Route path="/pei" element={<Pei />} />
              <Route path="/poi" element={<Poi />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
