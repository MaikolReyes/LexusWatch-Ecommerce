import React from "react";
import logoTwitter from '../img/twitter.png';
import logoFacebook from '../img/facebook.png'
import logoInstagram from '../img/instagram.png'

const Footer = () => {
    return (
        <footer class="footer-container bg-dark">
            <div class="pie d-flex">
                <a class="texto-footer" target="_blank" href="https://www.instagram.com/">
                    <img class="redes" src={logoInstagram} alt="Instagram" />Instagram</a>
                <a class="texto-footer" target="_blank" href="https://twitter.com/home">
                    <img class="redes" src={logoTwitter} alt="twitter" />Twitter</a>
                <a class="texto-footer" target="_blank" href="https://www.facebook.com/">
                    <img class="redes" src={logoFacebook} alt="facebook" />Facebook </a>

            </div>
            <h3 class="creditos">Copyright © 2022 Todos los derechos reservados por Maikol Reyes</h3>

        </footer>
    )

}

export default Footer;