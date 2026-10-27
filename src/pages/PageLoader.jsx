import "./PageLoader.css";

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Yuklanmoqda">
      <span className="page-loader__brand">ISMOIL</span>
      <span className="page-loader__bar" aria-hidden="true" />
    </div>
  );
}

export default PageLoader;