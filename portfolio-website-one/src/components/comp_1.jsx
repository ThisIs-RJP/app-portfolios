// Styles
import "../styles/comp_1.css";

import LinkedIn from "../images/linkedin.png";
import Mail from "../images/mail.png";
import Demo from "../images/spooder.webp";

function Comp1() {
    return (
      <div className="comp1">
        <div className="comp-text-container">

            <div className="comp-text-text-box">
                <h1>
                    <div id="introduction">Welcome</div>
                </h1>

                <div id="description">
                    HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA  
                    HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA  
                    HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA HUMANA  
                </div>

                <div className="contacts">
                    <div className="contacts contact">
                        <div className="contact-icon">
                          <img src={LinkedIn} alt="LinkedIn" id="contact-icon-icon"/>
                        </div>

                        <div className="contact-text">
                          - Lebron James
                        </div>
                    </div>
                    <div className="contacts contact">
                        <div className="contact-icon">
                          <img src={Mail} alt="Mail" id="contact-icon-icon"/>
                        </div>

                        <div className="contact-text">
                          - lebron@james.com
                        </div>
                    </div>
                    <div className="contacts contact">
                        <div className="contact-icon">
                          <img src={LinkedIn} alt="LinkedIn" id="contact-icon-icon"/>
                        </div>

                        <div className="contact-text">
                          - ASDASD
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="profile-box">
          <div className="profile-picture">
            <img src={Demo} alt="Profile Picture" id="profile-picture"/>
          </div>

          <div className="profile-name">
            LEBRON
            <br />
            JAMES
          </div>

          <div className="profile-college">
            <div className="profile-year">
              3rd Year
            </div>

            <div className="profile-line">
            </div>

            <div className="profile-course">
              COMSCI
            </div>
          </div>

          <div className="profile-detail">
            Frontend Developer
          </div>
        </div>
      </div>
    );
  }
  
export default Comp1;