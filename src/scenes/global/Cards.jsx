import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
 
      <div className='container'>
    
        <div className="box1">
        <img 
            alt="error"
            width="35px"
            height="35px"
            src={`../../assets/coins.png`}
            style={{paddingTop:"10px"}}
        />
              <div style={{paddingLeft: "10px"}}>
                <div className='premiumValue'>
                    $12.533
                </div>
                <div className='premiumName'>
                    Premium
                </div>
            </div>
        </div>
    


     
        <div className="box1">
        <img 
            alt="error"
            width="25px"
            height="25px"
            src={`../../assets/process.png`}
            style={{paddingTop:"10px"}}
      
        />
              <div style={{paddingLeft: "10px"}}>
                <div className='premiumValue'>
                    234
                </div>
                <div className='premiumName'>
                    Processed
                </div>
            </div>
        </div>




        <div className="box1">
        <img 
            alt="error"
            width="25px"
            height="25px"
            src={`../../assets/error-img.png`}
            style={{paddingTop:"10px"}}
        />
              <div style={{paddingLeft: "10px"}}>
                <div className='premiumValue'>
                    23
                </div>
                <div className='premiumName'>
                    Errors
                </div>
            </div>
        </div>

    </div>

  )
}

export default Cards
