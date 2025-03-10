
// Styles
import "./styles/comp_1_mobile.css";
import City from "../../images/city.jpeg";
import Demo from "../../images/demo.png"

function Comp1() {
  return (
    <div className="comp1-mobile">
      <div className="comp1-left-box">
        <div className="name-box-mobile">
          <div className="name-box-mobile center-box">
            <div className="animate-name-box-mobile">
              <div style={{"marginBottom": "2%"}}>
                <p1 >
                  Lebron James
                </p1>
              </div>
              <br />
              <div className="name-box-mobile-text-animate-mobile">
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

      <div className="picture-box-mobile">
        <div className="picture-box-mobile top-photo-container">
          <div className="top-box-container">
            <div className="top-box-container photo">
              <div className="top-box-container-photos">
                <img src={Demo} style={{"marginRight" : "5%"}} alt="Top right" id="picture-box-one"/>
              </div>

              <div className="top-box-container-photos">
                <img src={Demo} style={{"marginLeft" : "5%"}} alt="Top right" id="picture-box-two"/>
              </div>
            </div>
            <div className="vert-text-box">
              MODEL
            </div>
          </div>
        </div>
        <div className="bottom-box-container">
          <div className="bottom-box-container top-photo-container">
            {/* <img src={City} alt="City" id="top-img-two"/> */}
            <div className="bottom-box-container-photos">
              <img src={Demo} alt="Left Photo" style={{"marginRight" : "5%"}} id="bottom-picture-box-one"/>
            </div>

            <div className="bottom-box-container-photos">
              <img src={Demo} alt="Right Photo" style={{"marginLeft" : "5%"}} id="bottom-picture-box-two"/>
            </div>
          </div>

          <div className="bottom-box-container bottom-text">
            FASHION
          </div>
        </div>
      </div>

      {/* <div className="picture-box-mobile">
        <div className="picture-box-mobile-container">
          <div className="picture-box-mobile-top-box">
            <div className="picture-container">
                <div className="top-right-image">
                    <img src={Demo} alt="Top right" id="picture-box-mobile-1"/>
                </div>
                <div className="bottom-left-image">
                    <img src={City} alt="Bottom left" />
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
      </div> */}
    </div>
  );
}
  
export default Comp1;