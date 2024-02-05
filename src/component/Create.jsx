import React from "react";
import Home_image from "../Home.jpg";
const Create=(prps)=>{
    return(
        <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center" id="home-left">
                <div className="left">
                <h1>Grow Your  Business With 
                <span style={{color:"blue"}}> <b> {prps.name}</b></span>
               </h1><br />

                <p>we are the Team Of telented Developer makin websites</p><br />
                <button className="beautiful-button">Get Started</button>
                </div>
              
                
                
            </div>
            <div className="col-md-6 col-sm-12 " id="home-right">
                <div className="home-right">
                    <img src={prps.img} className="img-fluid" alt="" />
                </div>
            </div>
          </div>
         </div>

       
        </>
    )
}
export default Create