// Styles
import "./styles/navbar_mobile.css";
import Mail from "../../images/mail.png"
import Insta from "../../images/insta.webp"

function Nav_Mobile() {
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
                <img src={Mail} alt="mail" className="icon" style={{width: "80%", height: "auto"}}/>
            </div>
            <div className="nav-links link-icon">
                <img src={Insta} alt="insat" className="icon" style={{width: "80%", height: "auto"}}/>
            </div>
        </div>
      </div>
    );
  }
  
export default Nav_Mobile;