import { useState, useEffect } from "react"
import Error from "./Error";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  // Los States siempre se declaran antes del return
  const [nombrePet, setNombrePet] = useState("");
  const [nombreOwner, setNombreOwner] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombrePet(paciente.nombrePet)
      setNombreOwner(paciente.nombreOwner)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( [nombrePet, nombreOwner, email, fecha, sintomas].includes('') ) {
      setError(true);

      return;
    }

    setError(false);

    //Objeto de Paciente
    const objPaciente = {
      nombrePet,
      nombreOwner,
      email,
      fecha,
      sintomas,
    }
    
    if(paciente.id) {
      objPaciente.id = paciente.id; //se actualiza registro de paciente
      const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

      setPacientes(pacientesActualizado);
      setPaciente({});
      
    } else {
      objPaciente.id = generarId(); //se agrega nuevo paciente

      setPacientes([...pacientes, objPaciente]);
    }


    //Se reinicia el formulario
    setNombrePet('')
    setNombreOwner('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-xl my-5 text-center">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">
            Administralos
          </span>
        </p>

        <form 
        onSubmit={handleSubmit} //dispara el submit
        className="mb-10 bg-white shadow-md rounded-xl py-10 px-5">

        {error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota: 
            </label>

            <input 
            type="text" id="mascota" placeholder="Nombre de la Mascota" 
            value={nombrePet} 
            onChange={(e)=>{
              setNombrePet(e.target.value)
            }} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario: 
            </label>

            <input 
            type="text" id="propietario" placeholder="Nombre del Propietario"
            value={nombreOwner}
            onChange={(e) => {
              setNombreOwner(e.target.value)
            }} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email: 
            </label>

            <input 
            type="email" id="email" placeholder="Correo Electronico Propietario" 
            value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
              Alta: 
            </label>

            <input 
            type="date" id="fecha"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value)
            }} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas: 
            </label>

            <textarea 
            id="sintomas" rows="4" placeholder="Describe los sintomas" 
            value={sintomas} 
            onChange={(e)=>{
              setSintomas(e.target.value)
            }} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
          </div>

          <input 
            type="submit" 
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" />
        </form>
    </div>
  )
}

export default Formulario