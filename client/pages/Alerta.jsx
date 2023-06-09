import { React, useContext } from 'react' //importamos el hook de react useContext 

import authContext from '@/context/auth/authContext';

 const Alerta = () => {

    const AuthContext = useContext(authContext); //el useContext accede al valor del contexto authContext que puede ser utilizado por componentes de la aplicacion que necesiten obtener el valor de este archivo.
    const { mensaje } = AuthContext;


    return (
        <div className='shadow-2xl shadow-black bordered p-2  text-center text-3xl mx-auto text-black  rounded-lg'>
            {mensaje}
        </div>
    )
}

export default Alerta;