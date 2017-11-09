import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize'

import PropTypes from 'prop-types'

export default class Item extends Component {

	static propTypes = {
		id: PropTypes.number.isRequired,
      	date: PropTypes.string.isRequired,
      	start: PropTypes.string.isRequired,
    }

	constructor(props){
        super(props)        
    }

    render() {
        return (
            <CollectionItem href={`${this.props.id}`}>
            	{this.props.date} à {this.props.start}
            </CollectionItem>
        );
    }
}

