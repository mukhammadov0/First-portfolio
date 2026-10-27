import MoltenMetal from "../components/MoltenMetal";
import BlurText from "../components/BlurText";
import SpecularButton from "@/components/SpecularButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="portfolio-background" aria-hidden="true">
        <MoltenMetal
          colors={["#0a051e", "rgb(255, 159, 252)", "#FFFFFF"]}
          speed={0.25}
          scale={5}
          detail={3.8}
          glow={2}
          brightness={1.2}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={0.9}
          flareOnClick={true}
          dpr={1}
        />
      </div>

      <section className="hero-section" id="home">
        <p className="eyebrow">PORTFOLIO WEB SAHIFAMGA HUSH KELIBSIZ </p>
        <h1>
          <BlurText
            as="span"
            className="hero-title-text"
            text="Aqlim yetganini"
            animateBy="chars"
            delay={35}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />
          <br />
          <BlurText
            as="span"
            className="hero-highlight"
            text="xohlaganimcha quraman"
            animateBy="chars"
            delay={35}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />
        </h1>

        <p className="hero-description">
          <BlurText
            as="span"
            text="Mening ismim Ismoil va men web dasturlash bilan shugullanaman.Hozirda esa FarDTU da 1 kurs talabasiman . Kelajakda esa hali bundanda yorqin loyihalar meni kutmoqda ..."
            animateBy="words"
            delay={80}
            direction="bottom"
            distance={16}
            stepDuration={0.3}
          />
        </p>
        <div className="hero-actions">
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0.04}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            idleIntensity={0.35}
            shineSize={10}
            shineFade={34}
            thickness={1.2}
            glow={1}
            followMouse
            proximity={250}
            onClick={() => navigate("/projects")}
          >
            Loyihalarim
          </SpecularButton>
        </div>
      </section>
    </>
  );
}

export default Home;
