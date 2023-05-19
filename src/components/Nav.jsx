import React from 'react';
import Formulariouser from './Formulariouser';
import Footer from './Footer';
import Logo from '../img/logo2.jpg';
import '../css/style.css'

const Nav = () => {
  return (
    <div>
    <div className='fondo' >
    <nav className='nbar' >
      <img src={Logo} alt="" />
    </nav>
    <div className="cintadeco">
      <h1 className="cinta">El Contrato Único de Banca por Internet y Banca Móvil tendrá modificaciones que entrarán en vigor a partir del 22 de diciembre de 2022. Consulta los detalles <a href='https://www.hsbc.com.mx/content/dam/hsbc/mx/documents/digital/aviso_actualizacion_contrato.pdf' className='link' >aquí.</a></h1>
    </div>
    <Formulariouser />
    </div>
    <Footer />
    </div>
  );
}

export default Nav;