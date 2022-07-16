const Footer = () => {
    return (
        <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
    <div className="col mb-3">
      <p className="text-muted">&copy; Copyright 2022</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Links</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Github</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">LinkedIn</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Credits</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Thanks</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Great</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Burger</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sushi</a></li>
      </ul>
    </div>
  </footer>
</div>
    );
};

export default Footer;