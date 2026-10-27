import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CardNav from "./components/CardNav";
import PageLoader from "./pages/PageLoader";
import SpecularButton from "./components/SpecularButton";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouterLink({ href, ...props }) {
  if (href.startsWith("/")) return <Link to={href} {...props} />;
  return <a href={href} {...props} />;
}

const navItems = [
  {
    label: "Haqimda",
    description: "Men kimligim va nima bilan shug'ullanishim haqida.",
    links: [{ label: "Haqimda sahifasi", href: "/about" }],
  },
  {
    label: "Loyihalarim",
    description: "Qilgan va qilayotgan ishlarim.",
    links: [{ label: "Barcha loyihalar", href: "/projects" }],
  },
  {
    label: "Aloqa",
    description: "Men bilan bog'lanish yo'llari.",
    links: [{ label: "Aloqa sahifasi", href: "/contacts" }],
  },
];
function App() {
  return (
    <main className="portfolio">
      {/* <nav className="navbar">
        <Link className="brand" to="/">ISMOIL</Link>
        <div className="nav-links">
          <Link to="/">Bosh sahifa</Link>
          <Link to="/about">Haqimda</Link>
          <Link to="/projects">Loyihalarim</Link>
          <Link to="/contacts">Aloqa uchun</Link>
        </div>
      </nav> */}
      <div style={{ position: "relative", zIndex: 20, padding: "16px" }}>
        <CardNav
          logo={
            <span style={{ fontWeight: 700, letterSpacing: "0.08em" }}>
              ISMOIL
            </span>
          }
          logoHref="/"
          logoAlt="ISMOIL"
          items={navItems}
          linkComponent={RouterLink}
          cta={{ label: "Aloqa uchun", href: "/contacts" }}
        />
      </div>

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <footer className="portfolio-footer">
        <span>© 2026 Ismoil</span>
        <span>Did bilan dizayn yaratildi.</span>
      </footer>
    </main>
  );
}

export default App;
