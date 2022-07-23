import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //en los componentes el codigo que va antes del return se escribe codigo js (funciones, objetos, condicionales, etc...)

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( pacienteState => pacienteState.id !== id);

    setPacientes(pacientesActualizados);
  }

  return ( //en el return se escribe la parte que será visible
    <div className="container mx-auto mt-10 mb-10">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />

        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
