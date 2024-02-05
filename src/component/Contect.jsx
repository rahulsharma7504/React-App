import React, { useState } from 'react';

const Contect = () => {
const [data,setData]=useState({
  Name:"",
  Email:"",
  Message:""
})

  const change=(val)=>{
    setData({Name:val.target.value},
      {Email:val.target.value},
      {Email:val.target.value})
  } 


  const stop=(e)=>{
    e.preventDefault()
  }
  
  return (
   
    <>

    

      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-5">

            <h2 class="mb-4">Contact Us</h2>
            <form onSubmit={stop}>

              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name='name' onChange={change} id="name" placeholder="Enter your name" required/>
              </div>

              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" name='email'onChange={change} id="email" placeholder="Enter email" required/>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" name='msg' onChange={change}  rows="5" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>

            </form>

          </div>
          <div className="col-md-3">
            <h3>{data.Name}</h3>
          </div>
        </div>
      </div>

    </>
  )
};
export default Contect