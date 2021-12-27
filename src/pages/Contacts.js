import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default class Contacts extends Component {
    render () {
        return (
            <Container style={{width: '500px'}} className="Contacts-wrapper">
               <h1 className="text-center">Contact us</h1> 

               <Form className="d-block">
                   <Form.Group controlID="formBasicEmail">
                      <Form.Label>Email address</Form.Label> 
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" />
                      <Form.Text>
                          We'll never share your email with anyone else
                      </Form.Text>
                   </Form.Group>

                    <Form.Group 
                        controlId="formBasicPassword" 
                        className="mt-2">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group 
                        controlId="formBasicCheckbox" 
                        className="mt-2">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group> 
                   
                    <Button 
                        variant="primary" 
                        type="Submit" 
                        className="mt-3">Submit</Button>      
                
                 </Form>
            </Container>
        )
    }
}