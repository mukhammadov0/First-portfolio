import BlurText from "../components/BlurText";
import DotGrid from "../components/DotGrid";

function Projects() {
  return (
    <>
      <div className="projects-background" aria-hidden="true">
        <DotGrid
          dotSize={4}
          gap={22}
          baseColor="#2a2238"
          activeColor="#c7a0ff"
          proximity={160}
          fade={0.5}
        />
      </div>

      <section className="hero-section projects-hero">
        <p className="eyebrow">LOYIHALARIM</p>
        <h1>
          <BlurText
            as="span"
            className="about-highlight"
            text="Tez kunda..."
            animateBy="chars"
            delay={60}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />
        </h1>
        <p className="hero-description">
          <BlurText
            as="span"
            text="Bu mening birinchi portfolio saytim. Hozir yangi loyihalar ustida ishlayapman, ular tayyor bo'lgach shu yerda paydo bo'ladi."
            animateBy="words"
            delay={80}
            direction="bottom"
            distance={16}
            stepDuration={0.3}
          />
        </p>
      </section>
    </>
  );
}

export default Projects;