import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h2 className="footer__title"> Molina</h2>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a href="#" className="footer__social-link" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" className="footer__social-link" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__social-link" target="_blank">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
          <span className="footer__copy">
            &#169; Crypticalcoder. All rigths reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
