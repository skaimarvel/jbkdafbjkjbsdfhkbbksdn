
import React from 'react';
import Logotransparent from '../img/logo.png';

const Footer = () => {
    return (
        <div>
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row1">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <div className="cta-text">
                                <h4>Horarios</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Demos y ayudas</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Contrato</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Seguridad en linea</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={Logotransparent} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Disfrute de una amplia gama de productos y servicios con Nosotros. Créditos, Créditos hipotecarios, Cuentas de ahorro, Inversiones y mas.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>HSBC</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Nuestros Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Contactos</a></li>
                                <li><a href="#">Aclaraciones</a></li>
                                <li><a href="#">Quejas</a></li>
                                <li><a href="#">Promociones</a></li>
                                <li><a href="#">Politica</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                               
                            </div>
                            <div className="footer-text mb-25">
                                <p>Gracias por preferirnos.</p>
                            </div>
                            <div className="subscribe-form">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    );
}

export default Footer;