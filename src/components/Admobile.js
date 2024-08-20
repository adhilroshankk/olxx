import React from 'react'
import { Form } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Admobile() {
    return (
       <div className='p-5 imagemobile'>
            <div className=' bg-light d-flex flex-column container w-25'>
                <div><i style={{ fontSize: "50px", border: "1px,solid", borderRadius: "50%", padding: "20px" }} class="fa-solid fa-mobile"></i></div> <br />
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <DropdownButton id="dropdown-basic-button" title="MOBILE BRAND">
          <Dropdown.Item href="#/action-1">XIAOMI</Dropdown.Item>
          <Dropdown.Item href="#/action-2">SAMSUNG</Dropdown.Item>
          <Dropdown.Item href="#/action-3">I PHONE</Dropdown.Item>
        </DropdownButton>
                    </Form>
                    <br />
                    <div className='d-flex justify-content-center gap-2'><button className='btn btn-danger '>post ad</button><button className='btn btn-warning '>cancel</button>
                    </div>
                </div>
                <br />
            </div>
       </div>
    )
}

export default Admobile