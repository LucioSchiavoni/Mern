import { Layout } from '@/components/Layout';
import React, { useContext, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import { Alerta } from './Alerta';


const registrarse = () => {


    const AuthContext = useContext(authContext);
    const { mensaje, registrarUsuario } = AuthContext;


    //validacion con formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: '',
            edad: '',
            ubicacion: '',
            foto: ''
        },
        validationSchema: Yup.object({

            nombre: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string().required("Campo Obligatorio").email("Debe ser un email Valido"),
            password: Yup.string().required("Campo Obligatorio"),
            edad: Yup.string().required("Campo Obligatorio"),
            ubicacion: Yup.string().required("Campo Obligatorio")
        }),

        onSubmit: valores => {
            const formData = new FormData();
            formData.append('nombre', valores.nombre);
            formData.append('email', valores.email);
            formData.append('password', valores.password);
            formData.append('edad', valores.edad);
            formData.append('ubicacion', valores.ubicacion);
            formData.append('foto', valores.foto);
            registrarUsuario(formData)
        }

    })

    return (
        <Layout>
            <div className='h-screen p-3 bg-attachment bg-cover  bg-[url(https://www.booska-p.com/wp-content/uploads/2021/11/Dr-7IumWkAEzUgT.jpg-large.jpg)]'>
                <h2 className='text-4xl  text-center text-black font-mono font-bold my-4 '>Registrarse</h2>

                {mensaje && <Alerta />}
                <div className='flex justify-center mt-5'>
                    <div className='w-full max-w-lg'>
                        <form onSubmit={formik.handleSubmit} className='bg-transparent rounded shadow-xl px-8 pt-6 pb-8 mb-4' method='POST' encType='multipart/form-data'>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='nombre'>Nombre de Usuario</label>
                                <input type="text"
                                    className='input input-info bordered w-full max-w-xs'
                                    id='nombre'
                                    placeholder='Nombre de Usuario'
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.nombre && formik.errors.nombre ? (
                                    <div className='text-black'>

                                        <p>{formik.errors.nombre}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500  text-sm font-bold mb-2' htmlFor='email'>Email</label>
                                <input type="text"
                                    className='input input-bordered  input-info w-full max-w-xs'
                                    id='email'
                                    placeholder='Correo'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-black'>

                                        <p>{formik.errors.email}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='password'>Contraseña</label>
                                <input type="password"
                                    className='input input-bordered  input-info w-full max-w-xs'
                                    id='password'
                                    placeholder='Contraseña'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div> <p className='font-sans tracking-tight text-sm italic'>No compartiremos tus datos con nadie.</p> </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='text-black'>

                                        <p>{formik.errors.password}.</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='nombre'>Edad</label>
                                <input type="text"
                                    className='input input-bordered input-info w-full max-w-xs'
                                    id='edad'
                                    placeholder='Edad'
                                    value={formik.values.edad}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.edad && formik.errors.edad ? (
                                    <div className='text-black'>

                                        <p>{formik.errors.edad}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='nombre'>Ubicacion</label>
                                <input type="text"
                                    className='input input-bordered input-info w-full max-w-xs'
                                    id='ubicacion'
                                    placeholder='Ubicacion'
                                    value={formik.values.ubicacion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.ubicacion && formik.errors.ubicacion ? (
                                    <div className='text-black'>

                                        <p>{formik.errors.ubicacion}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='foto'>Foto</label>
                                < input type="file" className='file-input file-input-bordered w-full max-w-xs'
                                    id='foto'
                                    name='foto'
                                    onChange={(event) => {
                                        formik.setFieldValue("foto", event.currentTarget.files[0])
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.foto && formik.errors.foto ? (
                                        <div className=''>

                                            <p>{formik.errors.foto}.</p>
                                        </div>
                                    ) : null
                                }

                            </div>
                            <button type='submit' className='btn px-16 hover:bg-sky-600 hover:text-black'>Enviar</button>

                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
export default registrarse





