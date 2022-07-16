// import eshop_website_img from "./img/eshop_website_img.jpg";
// const logo = require("./img/eshop_website_img.jpg");
const MainContent = (props) => {
  return (
    <div className="container" id="main-content">
      <div className="container my-30" id="about">
        <h3>About</h3>
        <p>
          Full Stack Developer<br />
          Happy to code<br />
          Check out my portfolio below
        </p>
      </div>
      <div className="container my-30" id="portfolio">
        <h3>eshop website</h3>
        <p>
          Website eshop created with MERN stack (MongoDB, Express, React, Node.js)
        </p>
        <img className=".img-fluid rounded mx-auto d-block" width="500" src="images/eshop_website_img.jpg"/><br />
        <a href="https://mos-eshop.herokuapp.com/" target="_blank"><button type="button" class="btn btn-dark">Check it out</button></a>
        
      </div>
      <div className="container my-30" id="contact">
        <h3>Contact</h3>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
};

export default MainContent;
