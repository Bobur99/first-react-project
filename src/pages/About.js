import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import React, { Component } from 'react'

export default class About extends Component {
    render () {
        return (
            <Container className="AboutUS">
                <Tab.Container 
                id="left-tabs-example" 
                defaultActiveKey="first"                
                >
                   <Row>
                      <Col sm={3}>
                        <Nav variant="pills"
                             className="flex-column mt-2">
                                 <Nav.Item>
                                     <Nav.Link
                                        eventKey="first"
                                     >
                                        Design
                                     </Nav.Link>
                                 </Nav.Item>

                                 <Nav.Item>
                                     <Nav.Link
                                        eventKey="second"
                                     >
                                        Team
                                     </Nav.Link>
                                 </Nav.Item>

                                 <Nav.Item>
                                     <Nav.Link
                                        eventKey="third"
                                     >
                                        Programming
                                     </Nav.Link>
                                 </Nav.Item>

                                 <Nav.Item>
                                     <Nav.Link
                                        eventKey="fourth"
                                     >
                                        Frameworks
                                     </Nav.Link>
                                 </Nav.Item>

                                 <Nav.Item>
                                     <Nav.Link
                                        eventKey="fifth"
                                     >
                                        Libraries
                                     </Nav.Link>
                                 </Nav.Item>
                        </Nav>
                     </Col>

                     <Col sm={9}>
                        <Tab.Content>
                           <Tab.Pane eventKey="first">
                              <img 
                              src="https://s3-alpha.figma.com/hub/file/314494079/976a59d3-cf17-4dcc-a3d8-6651da344ee4-cover"
                              width="75%"
                              className="mt-2 mb-1"
                              />
                              <p>Figma is a free, online UI tool where you can create, collaborate, prototype and handoff all in the same place. Stay in the flow by ideating, creating</p>
                           </Tab.Pane>

                           <Tab.Pane eventKey="second">
                              <img 
                              src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg"
                              width="90%"
                              className="mt-2 mb-1"
                              />
                              <p>Forward. X-Team provides high-performing teams of developers for the world's leading brands. for developersfor companies.</p>
                              <p>We build high-performing teams of developers for the world’s leading brands. Join X-Team's community to gain access to job offers working on long-term projects for companies like Riot Games, FOX, Coinbase, and more.</p>
                           </Tab.Pane>

                           <Tab.Pane eventKey="third">
                              <img 
                              src="https://www.nicepng.com/png/detail/380-3801129_glider-offers-a-clean-and-elegant-way-to.png"
                              width="55%"
                              className="mt-2 mb-1"
                              />
                              <p>Ideally, every programmer should have knowledge of a language that's close to the system (C, Go, or C++), a language that's object-oriented (Java or Python), a functional programming language (Scala), and a powerful scripting language (Python and JavaScript)</p>
                           </Tab.Pane>

                           <Tab.Pane eventKey="fourth">
                              <img 
                              src="https://nisnom.com/wp-content/uploads/2018/04/7-luchshih-javascript-frejmvorkov-i-bibliotek-dlya-izucheniya-v-2018.jpg"
                              width="100%"
                              className="mt-2 mb-1"
                              />
                              <p>A software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code. JavaScript framework is an application framework</p>
                           </Tab.Pane>

                           <Tab.Pane eventKey="fifth">
                              <img 
                              src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large"
                              width="100%"
                              className="mt-2 mb-1"
                              />
                              <p>JavaScript libraries contain various functions, methods, or objects to perform practical tasks on a webpage or JS-based application. You can ...</p>
                           </Tab.Pane>

                        </Tab.Content>
                     </Col>                                      
                   </Row> 
                </Tab.Container>
            </Container>
        )
    }
}