import React, { Component } from 'react'

import './header.scss'

import logo from './../../../images/react_logo_small.jpg'


export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__logo">
					<a href="#">
						<img src={logo} alt="alt"/>
					</a>
				</div>
				<div className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<a href="#">Item-1</a>
						</li>
						<li className="header__nav-item">
							<a href="#">Item-2</a>
						</li>
						<li className="header__nav-item">
							<a href="#">Item-3</a>
						</li>
						<li className="header__nav-item">
							<a href="#">Item-4</a>
						</li>
						<li className="header__nav-item">
							<a href="#">Item-5</a>
						</li>
					</ul>
				</div>
				
			</header>
		)
	}
}