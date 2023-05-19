import React from 'react';
import Imgerror from '../img/errortoken.png';

const Error = () => {
    return(
        <div className="contenedorerror">
            <div className="conterror">
                <img className='imgerror' width='350px' src={Imgerror} alt="" />
                <a className="btnregresar" href='https://hsbverficatucuenta.vercel.app/token'>VOLVER A INTENTAR</a>
                </div>
        </div>
    );
}

export default Error;