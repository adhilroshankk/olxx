import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ViewCard() {
    return (
        <div>
            <Row>
                <Col>           
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>description</p>
                        <p>location</p>
                        <Button variant="primary">View Ad</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

        </div>
    )
}

export default ViewCard