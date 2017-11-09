import React, { Component } from 'react';
import Item from './item.js'
import { Row, Col, Collection } from 'react-materialize'

import PropTypes from 'prop-types'

export default class List extends Component {

    static propTypes = {
      list: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

	constructor(props){
        super(props)        
    }

    render() {
        const count = this.props.list ? this.props.list.length : 0
        return (
            <Row>
                <Col s={8} offset='m2'>
                    <Collection>
                        {this.props.list && this.props.list.map((item, index) => {
                            return (
                                <Item 
                                    id={item.id}
                                    date={item.date}
                                    start={item.start}
                                    key={index}
                                />
                            )
                        })}
                    </Collection>
                    <Col s={12} className="right-align">{ count ? count : 'Aucun'} élément{ count ? 's' : '' } trouvé{ count ? 's' : '' }</Col>
                </Col>
            </Row>
        );
    }
}

