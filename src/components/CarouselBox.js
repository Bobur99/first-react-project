import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imgI from '../assets/img1.jpg'
import imgII from '../assets/img2.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
            // <Carousel className="mb-5">
            //     <Carousel.Item style={{height: "600px"}}>
            //         <img
            //           className="d-block w-100"  
            //           src={imgI} 
            //           alt="first slide"               
            //         />
            //         <Carousel.Caption>
            //             <h3>Image 1</h3>
            //             <p>векторная графика, графика, графический дизайн, красочность, глаз, 8K Ultra HD картинка</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //           className="d-block w-100"  
            //           src={imgII}
            //           alt="second slide"                
            //         />
            //         <Carousel.Caption>
            //             <h3>Image 2</h3>
            //             <p>векторная графика, графика, графический дизайн, красочность, глаз, 8K Ultra HD картинка</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //           className="d-block w-100"  
            //           src={imgI}
            //           alt="third slide"                
            //         />
            //         <Carousel.Caption>
            //             <h3>Image 2</h3>
            //             <p>векторная графика, графика, графический дизайн, красочность, глаз, 8K Ultra HD картинка</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //           className="d-block w-100"  
            //           src={imgI}
            //           alt="fourth slide"                
            //         />
            //         <Carousel.Caption>
            //             <h3>Image 2</h3>
            //             <p>векторная графика, графика, графический дизайн, красочность, глаз, 8K Ultra HD картинка</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>

            // </Carousel>

            <Carousel controls={false} fade={true}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>                               
            </Carousel>
        )
    }
}