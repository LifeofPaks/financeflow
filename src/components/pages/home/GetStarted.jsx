import React from 'react'
import "./GetStarted.scss"
import Play from "../../../assets/play.png";
import Si7 from "../../../assets/si7.png"
import Si8 from "../../../assets/si8.svg.png";
import Si9 from "../../../assets/si9.svg.png";

const GetStarted = () => {
  return (
    <div className='gs'>
          <div className="dr bottom">
      <div className="left">
          <img src={Play} alt="phone" />
      </div>

      <div className="right">
        <h2>Get started today</h2>
        <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
        </p>

        <div className="itemWraps">
          <div className="item">
            <div className="smallIcon">
              <img src={Si7} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Download app</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si8} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Create a free account</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si9} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Start trading</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GetStarted