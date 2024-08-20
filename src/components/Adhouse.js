import React from 'react'
import { Form } from 'react-bootstrap'


function Adhouse() {
    return (
    <div className='imageadhouse p-5'>
            <div className=' bg-light d-flex flex-column container w-25 border'>
                <div><i style={{ fontSize: "50px", border: "1px,solid", borderRadius: "50%", padding: "20px" }} class="fa-solid fa-house"></i></div> <br />
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>
                        
         
                    </Form>
                    <br />
                    <div className='d-flex justify-content-center gap-2'><button className='btn btn-danger '>post ad</button><button className='btn btn-warning '>cancel</button>
                    </div>
                    <br />
                </div>
            </div>
    </div>
    )
}

export default Adhouse