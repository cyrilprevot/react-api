import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import {Row, Col} from 'react-materialize'

export default class Footer extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Row>
				<Col s={12} className="center-align">
					<Link to='/'>Retourner à l'accueil</Link>
				</Col>
			</Row>
		)
	}
}