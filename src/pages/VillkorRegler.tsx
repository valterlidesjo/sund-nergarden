import "./scss/_villkorRegler.scss";
import sundBastu2 from "../assets/sund-bastu2.jpeg";
import sundBastu2W from "../assets/sund-bastu2.webp";

const VillkorRegler = () => {
  return (
    <>
      <div className="villkor-container">
        <div className="villkor-pic-container">
          <picture>
            <source srcSet={sundBastu2W} type="image/webp" />
            <img src={sundBastu2} alt="Sund Villkor Image" />
          </picture>

          <div className="villkor-header-container">
            <p className="villkor-header">Villkor & Regler</p>
          </div>
        </div>
        <div className="villkor-under-dev">
          <p className="villkor-dev-text">
            Denna sida är under utveckling, Tack för ert tålamod!
          </p>
        </div>
      </div>
    </>
  );
};

export default VillkorRegler;
