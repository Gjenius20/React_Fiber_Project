export default function Navbar() {
  return (
    <header className="absolute z-50 w-screen">
      <div className="flex">
        <div className="logo">CHAIR.</div>
        <nav>
          <ul>
            <li>
              <a href="/">discover</a>
            </li>
            <li>
              <a href="/">products</a>
            </li>
            <li>
              <a href="/">solutions</a>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className="btn">
              <a href="/">order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
