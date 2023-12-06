import "./proyects.css";
import { portfolio } from "../../Data";
import PortfolioItem from "../PortfolioItem.jsx";

const Proyects = () => {
  return (
    <>
      <section className="portfolio section" id="proyects">
        <h2 className="section__title">Mi portfolio</h2>
        <span className="section__subtitle">Mis proyectos</span>

        <div className="portfolio__container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Proyects;
