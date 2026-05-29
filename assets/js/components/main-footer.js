// js/components/main-header.js
class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="contato" class="site-footer">
        <div class="container">
            <div class="footer-content">
                
                <div class="footer-column footer-about">
                    <h3 class="footer-logo"><img src="/assets/images/LOGO FUNDO TRANSPARENTE.png" alt="logo Edge Ti"></h3>
                    <p>Sua parceira em soluções de tecnologia, focada em performance, segurança e suporte especializado para impulsionar seus resultados.</p>
                    <div class="social-media">
                        <a href="https://www.instagram.com/edge.ti/" target="_blank" aria-label="Instagram" class="social-link">
                            <span class="icon-footer icon-insta"></span>
                        </a>
                    </div>
                </div>

                <div class="footer-column footer-links">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="/#inicio">Início</a></li>
                        <li><a href="/#servicos">Soluções</a></li>
                        <li><a href="/#sobre">Sobre Nós</a></li>
                        <li><a href="/#vamos-conversar">Contato</a></li>
                    </ul>
                </div>

                <div class="footer-column footer-contact">
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <span class="icon-footer icon-map"></span>
                            <span>Palhoça, SC, Brasil</span>
                        </li>
                        <li>
                            <span class="icon-footer icon-phone"></span>
                            <span>(48) 9176-3985</span>
                        </li>
                        <li>
                            <span class="icon-footer icon-mail"></span>
                            <span>contato@edgeti.com.br</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Edge TI. Todos os direitos reservados.</p>
                <a href="centralPrivacidade">Política de Privacidade</a>
            </div>
        </div>
    </footer>
    `;
  }
}
customElements.define('main-footer', MainFooter);