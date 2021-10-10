import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FILTER_KEY = {
    KEY: 'selectedFilterOption'
};

const FilterComponent = (props) => {
    const { onFilterChange, filterList, selectedOption } = { ...props };
    return (
        <Row>
            <Col sm={3}><strong>Filter By:</strong></Col>
            <Col sm={9}>
                <select style={{ width: '100%' }} value={selectedOption} onChange={e => onFilterChange(FILTER_KEY.KEY, e.target.value)}>
                    <option value=''>All</option>
                    {filterList && filterList.length > 0 && filterList.map((item, index) => {
                        return <option key={index} value={item.label}>{item.label}</option>;
                    })}
                </select>
            </Col>
        </Row>
    );
};

FilterComponent.proptypes = {
    onFilterChange: PropTypes.func.isRequired,
    filterList: PropTypes.array,
    selectedOption: PropTypes.string
};

export default FilterComponent;
