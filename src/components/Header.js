import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
<Link to={'/'}>
          <Navbar.Brand href="#home"><img src="https://i.postimg.cc/MH3Wd8Lw/download.png" alt="" style={{width:"50px"}}/></Navbar.Brand>
  
</Link>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly w-100">
           <div className='border d-flex align-items-center px-2 rounded gap-3' > <i class="fa-solid fa-magnifying-glass"></i> 
           <NavDropdown title="India" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown></div>
           <div className='d-flex border justify-content-between' style={{width:"800px"}}> <input type="text" placeholder='Find Cars, Mobile Phones and More...' className='w-100'/><div className='bg-dark d-flex align-items-center px-2'><i class="fa-solid fa-magnifying-glass" style={{color:"white"}}></i></div></div>
           <NavDropdown title="English" id="basic-nav-dropdown" className='border rounded'>
              <NavDropdown.Item href="#action/3.1">HINDI</NavDropdown.Item>
             
            </NavDropdown>
            <div ><p className='pt-2'><Link to={'/login'}><a href=''>Login</a></Link></p></div>
            <div ><p className='pt-2'><Link to={'/signup'}><a href=''>new here ? </a></Link></p></div>

            <div><Link to={'/postad'}><button className='btn btn-success rounded-75'>SELL</button></Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Header