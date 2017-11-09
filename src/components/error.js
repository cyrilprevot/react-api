import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'

import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes = {
        error: PropTypes.shape({
            status: PropTypes.number,
            data: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    error: PropTypes.string
                })
            ]),
            statusText: PropTypes.string
        }).isRequired,
    }

	constructor(props){
        super(props)
        console.log(props)
    }

    render() {
        const errorDetails = this.props.error.data.error || this.props.error.data
        const showDetails = errorDetails.toLowerCase() !== this.props.error.statusText.toLowerCase()

        return (
            <Row>
                <Col s={4} offset='m4' className="center-align">
                    <h1>Error {this.props.error.status}</h1>
                    <h2>{this.props.error.statusText}</h2>
                    {
                        showDetails && (
                            <Collapsible>
                                <CollapsibleItem header='Détails' icon='add'>
                                    {errorDetails}
                                </CollapsibleItem>
                            </Collapsible>
                        )
                    }
                </Col>
            </Row>
        );
    }
}

