const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
          <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
          <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
