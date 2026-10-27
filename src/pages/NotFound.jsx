import { Link } from "react-router-dom";
import BlurText from "../components/BlurText";

function NotFound() {
  return (
    <>
      <div className="notfound-background" aria-hidden="true" />

      <section className="hero-section notfound-page">
        <p className="eyebrow">XATOLIK</p>
        <h1 className="notfound-code">
          <BlurText
            as="span"
            className="about-highlight"
            text="404"
            animateBy="chars"
            delay={90}
            direction="bottom"
            distance={32}
            stepDuration={0.4}
          />
        </h1>
        <p className="hero-description">
          <BlurText
            as="span"
            text="Siz izlayotgan sahifa topilmadi. U ko'chirilgan yoki hech qachon mavjud bo'lmagan bo'lishi mumkin."
            animateBy="words"
            delay={80}
            direction="bottom"
            distance={16}
            stepDuration={0.3}
          />
        </p>
        <Link to="/" className="notfound-button">
          Bosh sahifaga qaytish
        </Link>
      </section>
    </>
  );
}

export default NotFound;