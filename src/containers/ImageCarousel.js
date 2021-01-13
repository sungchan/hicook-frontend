import '../App.css';
import React from 'react';

import { Carousel } from 'react-bootstrap';

class ImageCarousel extends React.Component {
	render(){
		return (
			<Carousel>
				<Carousel.Item>
					<img src='/logo-text.png'/>
				</Carousel.Item>	
			</Carousel>
		)
	}
}

export default ImageCarousel;