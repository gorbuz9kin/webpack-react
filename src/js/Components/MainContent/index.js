import React, { Component } from 'react'

import './mainContent.scss'



export default class MainContent extends Component {
	render() {
		return (
			<main>
				<div className="main__container">
					<p>Maincontent</p>
					<img src="./images/react_logo_small.jpg" alt="alt"/>
				</div>
			</main>
		)
	}
}