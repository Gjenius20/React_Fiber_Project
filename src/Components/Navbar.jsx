export default function Navbar() {
  return (
    <header className="navHeader">
      <div className="main">
        <div className="logo">CHAIR</div>
        <nav>
          <ul className="list">
            <li className="content">
              <a href="/" className="">
                Abbout
              </a>
            </li>
            <li className="content">
              <a href="/" className="">
                Featured
              </a>
            </li>
            <li className="content">
              <a href="/" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
