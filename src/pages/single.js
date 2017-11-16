import React, { Component } from 'react';
import { Row, Col, ProgressBar, Icon, Navbar, Button, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

import ApiService from '../services/apiService'

import Error from '../components/error'
import Footer from '../components/footer'


import Image from '../img/pontchaban.jpg'
import Logo from '../img/logo.jpg'


class SinglePage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			item: null,
			error: null,
		}
	}

	componentWillMount = () => {
        this.loadItem()
    }

	componentDidUpdate = () => {
		if(!this.state.error && this.state.item && this.state.item.id !== Number(this.props.match.params.id))
        	this.loadItem()
    }

    loadItem = () => {
    	ApiService.get(this.props.match.params.id).then(response => {
            this.setState({item: response, error: null})
        }).catch(error => {
            this.setState({error})
        })
    }

	render() {
		const isLoaded = this.state.error || (this.state.item && this.state.item.id === Number(this.props.match.params.id))
		const hasError = this.state.error !== null
		const item = this.state.item
		return (
			<div>
				<Navbar brand={<img src={Logo} height="64px"/>} right></Navbar>
				{
					!isLoaded ? (
						<Row>
	                        <Col s={12}>
	                            <ProgressBar />
	                        </Col>
	                    </Row>
	                ) : (
	                	hasError ? (
	                		<Error
	                			error={this.state.error}
	                		/>
	                	) : (
							<div>
								<Row className="valign-wrapper">
									<Col 
										s={4}
										className="right-align"
									>
										<Link to={`${item.id - 1}`}>
											<Button 
												waves='light' 
												disabled={item.id === 1}
											>
												<Icon left>keyboard_arrow_left</Icon> 
												Précédent
											</Button>
										</Link>
									</Col>
									<Col s={4} className="center-align">
										<Card
											header={<CardTitle image={Image} waves='light'>FERMETURE DU PONT JACQUES CHABAN DELMAS - {item.date}</CardTitle>}
											actions={<a href={item.link} target='_blank'>Plus de détails</a>}>
											<Row>
												<Col s={12} className="center-align">Raison fermeture: {item.reason}</Col>
												<Col s={12} className="center-align">Entre {item.start} et {item.end}</Col>
												<Col s={12} className="center-align">Sens de fermeture: {item.totale ? 'Totale' : 'Partielle'}</Col>
											</Row>
										</Card>
									</Col>
									<Col 
										s={4} 
										className="left-align"
									>
										<Link to={`${item.id + 1}`}>
											<Button waves='light'>
												<Icon right>keyboard_arrow_right</Icon> 
												Suivant
											</Button>
										</Link>
									</Col>
								</Row>
							</div>
						)
					)
				}
				<Footer/>
			</div>
		);
	}

}

export default SinglePage;