import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CarListComponent = ({ carDetails }) => {
    return (
        <React.Fragment>
            {carDetails && <Col sm={6}>
                <Row style={{ padding: '10px', margin: '10px', background: '#cccccc36', border: '1px solid #ccc' }}>
                    <Col>
                        <img src={carDetails.image} width='100%' />
                    </Col>
                    <Col>
                        <Row>
                            <Col md={12}><strong>Name:</strong> {carDetails.carName}</Col>
                            <Col md={12}><strong>Description:</strong> {carDetails.description}</Col>
                            <Col md={12}><strong>Varient:</strong> {carDetails.varient}</Col>
                            <Col md={12}><strong>Price:</strong> <span style={{ color: 'red', fontWeight: 'bold' }}>{carDetails.price}</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>}
        </React.Fragment>
    );
};

CarListComponent.propTypes = {
    carDetails: PropTypes.object
};

export default CarListComponent;
