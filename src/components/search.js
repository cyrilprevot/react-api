import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize'
import moment from 'moment'
import PropTypes from 'prop-types'

import SearchInput from './searchInput.js'

export default class Search extends Component {

  static propTypes = {
      inputChange: PropTypes.func.isRequired,
  }

  constructor(props){
        super(props)    
        
        this.state = {
          from: '',
          to: ''
        }    
    }

    inputChange = (name, value) => {
      let {from, to} = this.state
      
      name === "from" ? from = value : to = value
      this.setState({from, to})

      this.props.inputChange(from, to)
    }

    checkDates = () => {
      return moment(this.state.from, "DD/MM/YYYY") - moment(this.state.to, "DD/MM/YYYY") > 0
    }

    clearSearch = () => {
      this.setState({from: '', to: ''})
      if(this.state.from !== '' || this.state.from !== '')
        this.props.inputChange('', '')
    }

    render() {
        const error = this.checkDates()
        return (
          <div>
            {  
              error && ( 
                <div className="center red-text">Dates non valides !</div>
              ) 
            }
          	<Row>
                <Col s={8} offset='m2'>
                  <Row>
                    <Col s={7} offset='m2'>
                      <SearchInput 
                        placeholder="Du" 
                        value={this.state.from} 
                        icon="keyboard_arrow_right" 
                        name="from" 
                        valid={error} 
                        onChange={this.inputChange}
                      />
                      <SearchInput 
                        placeholder="Au" 
                        value={this.state.to} 
                        icon="keyboard_arrow_left" 
                        name="to" 
                        valid={error} 
                        onChange={this.inputChange}
                      />
                    </Col>
                    <Col s={1}>
                      <Button floating large className='red' waves='light' icon='close' onClick={this.clearSearch}/>
                    </Col>
                  </Row>
                </Col>
            </Row>
           </div>
        );
    }
}

