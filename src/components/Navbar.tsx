export default function Navbar() {
  return (
    <header className="navbar" style={{ background: "transparent" }}>
      <div className="navbar-left">
        <span className="navbar-greeting">
          Hello, Arjun{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </span>
      </div>
      <div className="navbar-right">
        <button className="navbar-coder">CODER</button>
        <div className="navbar-level">
          <span className="navbar-level-badge">Level1</span>
          <div className="navbar-level-progress">
            <div
              className="navbar-level-progress-bar"
              style={{ width: "20%" }}
            ></div>
            <span className="navbar-level-progress-text">0/20</span>
          </div>
        </div>
        <div className="navbar-profile">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="navbar-profile-img"
          />
        </div>
      </div>
    </header>
  );
}
