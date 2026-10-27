import { useState } from "react";
import BlurText from "../components/BlurText";
import LiquidChrome from "@/components/LiquidChrome";

function Contacts() {
  const [copied, setCopied] = useState(false);

  // O'z ma'lumotlaringizga almashtiring
  const email = "mukhammadovgithub@gmail.com";

  const links = [
    {
      id: "telegram",
      label: "Telegram",
      value: "Muhammadov Ismoil",
      href: "https://t.me/ismoilMukhammadov",
    },
    {
      id: "github",
      label: "GitHub",
      value: "mukhammadov0",
      href: "https://github.com/mukhammadov0",
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Nusxalab bo'lmadi:", error);
    }
  };

  return (
    <div
      className="contacts-page"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="contacts-background">
        <LiquidChrome
          color="#a855f7"
          speed={0.07}
          amplitude={0.3}
          detail={5}
          thickness={1}
          interactive
          frequencyX={3.2}
          frequencyY={3.5}
          depth={0.8}
          roughness={0.41}
          exposure={0.5}
          rippleStrength={0.9}
          rippleSize={0.6}
          tilt={0}
          intro
          lightMode={false}
        />
      </div>

      <header className="contacts-header">
        <p className="eyebrow">ALOQA</p>
        <h1>
          <BlurText
            as="span"
            text="Keling,"
            animateBy="chars"
            delay={45}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />{" "}
          <BlurText
            as="span"
            className="about-highlight"
            text="bog'lanamiz"
            animateBy="chars"
            delay={45}
            direction="bottom"
            distance={24}
            stepDuration={0.32}
          />
        </h1>
        <p className="hero-description">
          <BlurText
            as="span"
            text="Savolingiz, taklifingiz yoki birgalikda loyiha qilish fikringiz bo'lsa, yozing."
            animateBy="words"
            delay={80}
            direction="bottom"
            distance={16}
            stepDuration={0.3}
          />
        </p>
      </header>

      <div className="contacts-grid">
        {links.map((item) => (
          <a
            key={item.id}
            className="contact-card"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}

        <div className="contact-card">
          <span className="contact-label">Email</span>
          <a className="contact-value" href={`mailto:${email}`}>
            {email}
          </a>
          <button type="button" className="contact-copy" onClick={copyEmail}>
            {copied ? "Nusxalandi ✓" : "Nusxalash"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
