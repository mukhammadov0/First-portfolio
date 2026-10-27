import Beams from "../components/Beams";
import OrbitImages from "@/components/OrbitImages";
const photo = (id) =>
  `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=max`;

const carouselImages = [
  "https://i.pinimg.com/1200x/1e/2a/17/1e2a17097f05d0025bcd86eaa4848862.jpg ",
  "https://i.pinimg.com/736x/5b/c0/a9/5bc0a9596f5f7832581f68867d05f74a.jpg",
  "https://i.pinimg.com/736x/57/7d/a7/577da7e7ce6d3c07a84981d7525fcba0.jpg",
  "https://i.pinimg.com/736x/94/1c/0b/941c0b6642cde992a41d55ae71a6ae90.jpg",
  "https://i.pinimg.com/736x/7c/10/a9/7c10a9ed8456f7c34781e27bfc9a3950.jpg",
  "https://i.pinimg.com/1200x/fc/04/6a/fc046ad06b66d5ad23300955c12dc1fe.jpg",
];
import BlurText from "../components/BlurText";
import SpecularButton from "../components/SpecularButton";
import { Link } from "react-router-dom";
import { Url } from "@hugeicons/core-free-icons";

function About() {
  const skills = {
    frontend: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
    ],
    backendAndTools: [
      "Node.js (asoslar)",
      "Git & GitHub",
      "REST API",
      "VS Code",
    ],
  };

  return (
    <div className="about-page">
      <div className="about-background" aria-hidden="true">
        <Beams
          color="rgb(255, 159, 252)"
          backgroundColor="#12032533"
          speed={3}
          brightness={1.2}
          grain={1}
          quality={1}
          dpr={1}
        />
      </div>

      <header className="about-header">
        <p className="eyebrow">HAQIMDA</p>
        <h1>
          <BlurText
            as="span"
            className="about-title-text"
            text="Men"
            animateBy="chars"
            delay={45}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />{" "}
          <BlurText
            as="span"
            className="about-highlight"
            text="Ismoilman"
            animateBy="chars"
            delay={45}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />
        </h1>
        <p className="hero-description">
          FarDTU 1-kurs talabasiman. Veb-dasturlash sohasiga qiziqaman va har
          kuni zamonaviy texnologiyalarni o'rganib, amaliyotda qo'llamoqdaman.
        </p>
      </header>

      <div className="about-carousel">
        <OrbitImages
          images={carouselImages}
          shape="ellipse"
          radiusX={700}
          radiusY={170}
          itemSize={220}
          duration={33}
          height="100%"
        />
      </div>
    </div>
  );
}

export default About;
