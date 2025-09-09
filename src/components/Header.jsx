import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to={"/"}>MyShop</Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="listItem">
                <Link to= {"./"}>Home</Link>
              </li>
               <li className="listItem">
                <Link to= {"./shop"}>Shop</Link>
              </li>
               <li className="listItem">
                <Link to= {"./faq"}>FAQ</Link>
              </li>
               <li className="listItem">
                <Link to= {"./swiper"}>Swiper</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
