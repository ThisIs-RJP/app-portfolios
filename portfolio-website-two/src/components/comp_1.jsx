// Styles
import "../styles/comp_1.css";
import City from "../images/city.jpeg";
import Demo from "../images/demo.png"

function Comp1() {
    return (
      <div className="comp1">
        <div className="comp1-left-box">
          <div className="name-box">
            <div className="name-box center-box">
              <div className="animate-name-box">
                <div style={{"marginBottom": "2%"}}>
                  <p1 >
                    Lebron James
                  </p1>
                </div>
                <br />
                <div className="name-box-text-animate">
                  <p2>
                    
                  </p2>
                  <br />
                  <button>
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="picture-box">
          <div className="picture-box-container">
            <div className="picture-box-top-box">
              <div className="picture-container">
                  <div className="top-right-image">
                      <img src={Demo} alt="Top right" id="picture-box-1"/>
                  </div>
                  <div className="bottom-left-image">
                    <div className="bottom-left-image-photo-one">
                      <img src={Demo} alt="Left Photo" />
                    </div>
                    <div className="bottom-left-image-photo-two">
                      <img src={Demo} alt="Left Photo" />
                    </div>
                      {/* <img src={City} alt="Bottom left" /> */}
                  </div>
              </div>
              <div className="vertical-name">
                MODEL
              </div>
            </div>

            <div className="picture-bottom-text">
              <div className="picture-bottom-text text-box">
                FASHION
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Comp1;