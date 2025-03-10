// Styles
import "../styles/nav.css";
import Mail from "../images/mail.png"
import Insta from "../images/insta.webp"

function Nav() {
    return (
      <div className="nav">
        <div className="nav-links">
            <div className="nav-links link">
                PORTFOLIO
            </div>
            <div className="nav-links link">
                ABOUT ME
            </div>
        </div>

        <div className="nav-logo">
            Lebron
        </div>

        <div className="nav-links">
            <div className="nav-links link-icon">
                <img src={Mail} alt="mail" className="icon"/>
            </div>
            <div className="nav-links link-icon">
                <img src={Insta} alt="insat" className="icon"/>
            </div>
        </div>
      </div>
    );
  }
  
export default Nav;