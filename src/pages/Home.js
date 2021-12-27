import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, CardDeck, Card, Button, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center mt-4">Our team</h2>
                    <Row className="m-4">                  

                        <Col lg={4}>
                        <Card bg="light" border="light" text="primary">
                            <Card.Img 
                            variant="top" 
                            src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Forward. X-Team provides high-performing teams of developers for the world's leading brands. for developersfor companies.</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4}>
                        <Card bg="light" border="light" text="primary">                            
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Forward. X-Team provides high-performing teams of developers for the world's leading brands. for developersfor companies.</Card.Text>
                                <Button variant="primary">About team</Button>                                
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </Card>
                        </Col>

                        <Col lg={4}>
                        <Card bg="light" border="light" text="primary">
                            <Card.Img variant="top" src="https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Forward. X-Team provides high-performing teams of developers for the world's leading brands. for developersfor companies.</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                       </Col>
                    
                    </Row>
                </Container>
            </>
        )
    }
}