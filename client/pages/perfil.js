import { Layout } from '@/components/Layout'
import React from 'react'
import authContext from '@/context/auth/authContext';
import { useContext, useEffect } from 'react';

const perfil = () => {


    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])



    return (
        <Layout>
            {
                usuario ? (
                    <>
                        <div class=" flex flex-cols-2 glass rounded-xl m-auto mb-96  bg-transparent-100 shadow-lg w-5/12 ">
                            <img class="mb-20 max-w-auto m-10 w-80 mr-20 h-64 rounded-lg " src={usuario.foto} alt="" />
                            <div class="  text-center  p-4 w-98 rounded-lg  ">
                                <div className='mr-80 p-4'>
                                    <p class="text-3xl flex gap-5 text-black font-medium mb-20">
                                        Bienvenido {usuario.nombre}!</p>
                                    <p class="text-3xl flex gap-5 text-black font-medium mb-20">
                                        <b>Ubicacion: </b>{usuario.ubicacion}
                                    </p>
                                    <p class="text-3xl text-black flex gap-5 font-medium mb-20">
                                        <b>Edad: </b> {usuario.edad}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </>
                ) : (
                    <>
                        <div>Hola</div>
                    </>
                )
            }

        </Layout>
    )
}


export default perfil;