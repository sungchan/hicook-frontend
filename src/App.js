import './App.css';
import React from 'react';


import Topper from './containers/Topper';
import Middle from './containers/Middle';
import ImageCarousel from './containers/ImageCarousel';
import Footer from './containers/Footer';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
	render(){
		return (
			<div className='app'>
				<Topper/>
				<Middle/>
				<ImageCarousel/>
				<Footer/>
			</div>
		);	
	}
}

export default App;
