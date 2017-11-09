import React, { Component } from 'react';
import { Input, Icon } from 'react-materialize'

import PropTypes from 'prop-types'

export default class SearchInput extends Component {

    static propTypes = {
        valid: PropTypes.bool,
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

	constructor(props){
        super(props)       
    }

    handleChange = (e, value) => {
    	this.props.onChange(this.props.name, value)
    }

    render() {
    	const value = this.props.value
        return (
        	<Input 
        		s={6} 
                validate={this.props.valid}
        		placeholder={this.props.placeholder} 
                type='date'
                options={{
                    format: 'dd/mm/yyyy', 
                }}
        		name={this.props.name} 
        		value={value}
        		onChange={this.handleChange}
        	>
        		<Icon>{this.props.icon}</Icon>

        	</Input>
        );
    }
}

