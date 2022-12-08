const Navbar = () => {
  return (
    <header className="md:flex justify-between items-center bg-[#252525] text-white rounded-lg m-6 p-3">
      <h1>Logo</h1>
      <nav className="md:flex-col">
        <a href="" className="mr-3">
          Home
        </a>
        <a href="" className="mr-3">
          Abbout
        </a>
        <a href="" className="mr-3">
          Blog
        </a>
        <a href="" className="mr-3">
          Contact
        </a>
      </nav>
    </header>
  );
};
export default Navbar;
