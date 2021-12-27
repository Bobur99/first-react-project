import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup} from 'react-bootstrap'


export default class Blog extends Component {
    render() {
        return (
            <Container className="Blog-wrapper">
                <Row>
                    <Col md="9">
                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
                                </p>
                            </Media.Body>
                        </Media>                        
                    </Col>
                    <Col md="3">
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Phyton</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}