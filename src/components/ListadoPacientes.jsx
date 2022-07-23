import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className="mx-5 md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl my-5 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    <div className="h-screen md:overflow-y-scroll">
                        {pacientes.map( paciente => 
                            <Paciente
                                key = {paciente.id}
                                paciente = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        )}
                    </div>
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl my-5 text-center">
                        Comienza agregando Pacientes y Citas {""}
                        <span className="text-indigo-600 font-bold">y aparecerán aqui</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes;