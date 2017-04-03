import React, { Component } from 'react'

import './footer.scss'

import imgRedux from './../../../images/redux_logo_big.png'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__logo">
					<img src={imgRedux} alt="Alt"/>
				</div>
				<p>Footer</p>
			</footer>
		)
	}
}