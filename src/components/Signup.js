import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Signup() {
  return (
<div className='p-5'>
          <div className='loginbox border container p-2 'style={{width:"300px",height:"300px"}}>
      <Form.Control className='mt-5' type="text" placeholder="email id" />
      <br />
      <Form.Control type="text" placeholder="password" />
      <br />
      <div className='d-flex justify-content-center'>
        <button className='btn btn-success btn-rounded'>register</button>
      </div>


      <br />
      <div>
        <h5 className='text-dark'>already have an account</h5>
        <Link to={'/login'}><a href="">login</a></Link>
      </div>
    </div>
    </div>  )
}

export default Signup