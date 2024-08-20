import React from 'react'
import './Postadpage.css'
import { Link } from 'react-router-dom'

function Postadpage() {
  return (
    <div className='postadpage'>
        <div className='d-flex flex-column  container align-items-center gap-5 p-5'>
            <h2>choose a category</h2>
        <div><Link to={'/advehicle'}><i style={{fontSize:"100px",border:"1px,solid",borderRadius:"50%",padding:"20px"}} class="fa-solid fa-car"></i></Link></div>
        <div ><Link to={'/admobile'}><i style={{fontSize:"100px",border:"1px,solid",borderRadius:"50%",padding:"20px"}} class="fa-solid fa-mobile"></i></Link></div>
        <div ><Link to={'/adhouse'}><i style={{fontSize:"100px",border:"1px,solid",borderRadius:"50%",padding:"20px"}}  class="fa-solid fa-house"></i></Link></div>
            

        </div>
    </div>
  )
}

export default Postadpage