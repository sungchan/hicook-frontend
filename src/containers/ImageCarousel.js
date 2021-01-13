import '../App.css';
import React from 'react';

import { Carousel, Container } from 'react-bootstrap';

class ImageCarousel extends React.Component {

	render(){
		return (
			<div>
				<img src='/dsc1.jpg' style={{'height':"300px"}}/>
				<Carousel height='100px' showControls={true} >
					<Carousel.Item style={{'height':"300px"}}>
						<img src='/logo-text.png'/>
					</Carousel.Item >	
					<Carousel.Item style={{'height':"300px"}}>
						<img src='/dsc1'/>
					</Carousel.Item >
					<Carousel.Item style={{'height':"300px"}}>
						<img src='/dsc3.jgp'/>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}

export default ImageCarousel;