import './App.css';
import React from 'react';


import Topper from './containers/Topper';
import Footer from './containers/Footer';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
	render(){
		return (
			<div className="App">
			<Topper/>
				<header className="App-header">
					<Button>pizza</Button>pizza
				</header>
				<Footer/>
			</div>
		);	
	}
}

export default App;
