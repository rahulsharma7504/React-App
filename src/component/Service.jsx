import React from "react";
import Dummy from './Dummy'
import "./index.css";



const Services = () => {

    return (
        <>
            <div className="container">
                <div className="row gy-3">
                    {
                        Dummy.map((data,index)=>{
                            return(
                                <div className="col-4">
                                    
                                    <div className="card">
                                        <img src={data.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.value}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                        
                    }
                   
                </div>
            </div>



        </>
    )
}


export default Services