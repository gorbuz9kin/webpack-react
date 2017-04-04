import React, { Component } from 'react'

import './../styles/style.scss'

import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'



export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainContent />
				<Footer />
			</div>
		)
	}
}
