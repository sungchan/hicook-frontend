import './App.css';
import React from 'react';

import Navbar from './containers/Navbar';
import Footer from './containers/Footer';


class App extends React.Component {
	render(){
		return (
			<div className="App">
			 <Navbar/>
				<header className="App-header">
				pizza
				</header>
				<Footer/>
			</div>
		);	
	}
}

export default App;
