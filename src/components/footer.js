import React from "react";
import "./footer.css";
import Twit from "./twit";

const Footer = () => {
  return (
    <div style={{ background:"#3e2109"}}>
      
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>OUR INC</h4>
              <ul className="list-unstyled">
                <li>342-420-9696</li>
                <li>san fransisco , USA</li>
                <li>561 street south north</li>
              </ul>
            </div>
            <div className="col">
              <h4>Stuff</h4>
              <ul className="list-unstyled">
                <li>all the Stuff are competitors</li>
                <li>they are all worth </li>
                <li> 500 £ salary</li>
              </ul>
            </div>
            <div className="col">
              <h4>CAFFEINE</h4>
              <ul className="list-unstyled">
                <li>straight from brazil</li>
                <li>best coffe in all over the world</li>
                <li>hiring now</li>
              </ul>
            </div>
          </div>
          <div className="linecon">
            <div className="line"></div>
          </div>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} CAFFEINE PLACE INC | All right
              reserved | Terms of servise | privacy
            </p>
          </div>
        </div>
      </div>
      <div style={{paddingLeft:"33%"}}>
      <Twit></Twit>  </div> 
    </div>
  );
};

export default Footer;
