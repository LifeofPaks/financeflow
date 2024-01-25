import React from 'react'
import "./FinanceFlow.scss"
import C1 from "../../../assets/c1.svg.png"
import C2 from "../../../assets/c2.svg.png"
import C3 from "../../../assets/c3.svg.png"
import C4 from "../../../assets/c4.svg.png"
import C5 from "../../../assets/c5.svg.png"

const FinanceFlow = () => {
  return (
    <div className='ff section'>
        <p className="text">
        Finance flow has been featured on
        </p>
        <div className="companyWraps">
            <img src={C1} alt="ff-img" />
            <img src={C2} alt="ff-img" />
            <img src={C3} alt="ff-img" />
            <img src={C5} alt="ff-img" />
            <img src={C4} alt="ff-img" />
        </div>
    </div>
  )
}

export default FinanceFlow