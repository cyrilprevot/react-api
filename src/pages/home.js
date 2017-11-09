import React, { Component } from 'react';
import axios from 'axios'
import List from './../components/list';
import { Row, Col, ProgressBar, Navbar } from 'react-materialize'

import Search from '../components/search'
import Error from '../components/error'

import Logo from '../img/logo.jpg'

import { URL } from '../constants'

class HomePage extends Component {

    constructor(props){
        super(props)  

        this.state = {
            list: null,
            error: null,
        }
    }

    componentWillMount = () => {
        this.setState({list: null, error: null})
        axios.get(`${URL}`).then(response => {
            this.setState({list: response.data, error: null})
        }).catch(error => {
            this.setState({error: error.response})
        })
    }

    search = (from, to) => {
        this.setState({list: null, error: null})
        axios.get(`${URL}?from=${this.parseDate(from)}&to=${this.parseDate(to)}`).then(response => {
            this.setState({list: response.data})
        }).catch(error => {
            this.setState({error: error.response})
        })
    }

    parseDate = (date) => {
        return (date.replace(/\//g, "-"))
    }


    render() {
        const list = this.state.list
        const hasError = this.state.error !== null
        const isLoaded = list !== null || hasError

        return (
            <div>
                <Navbar brand={<img src={Logo} height="64px"/>} right></Navbar>
                <h1 className='center-align'>Liste des fermetures du pont</h1>
                <Search
                    inputChange={this.search}
                />
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
                            <List list={list}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default HomePage;