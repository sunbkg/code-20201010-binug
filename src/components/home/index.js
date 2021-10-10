import axios from 'axios';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CarListComponent from './carListComponent';
import FilterComponent from './filterComponent';

const HomePage = () => {

    const defaultFormData = {
        selectedFilterOption: ''
    };

    const [carListData, setCarListData] = React.useState([]);
    const [filterList, setFilter] = React.useState([]);
    const [filterdCarListData, setFilterdCarListData] = React.useState([]);
    const [formData, setFormData] = React.useState(defaultFormData);

    useEffect(() => {
        getCarListData();
    }, []);

    useEffect(() => {
        if (carListData.length < 1) return;
        let temp_data = [...carListData];
        if (formData && formData.selectedFilterOption) {
            let filterd_data = temp_data && temp_data.filter(item => item.carName == formData.selectedFilterOption);
            filterd_data && setFilterdCarListData(filterd_data);
        } else {
            setFilterdCarListData(carListData);
        }
    }, [formData]);

    const getCarListData = async()=> {

        await axios.get('./mockdata/index.json').then(function (res) {
            if (res && res.data && res.data.carList) {
                let responseCarList = res.data.carList;
                if (responseCarList && responseCarList.length > 0) {
                    setCarListData(responseCarList);
                    setFilterdCarListData(responseCarList);
                    let temp_filteroption = [];
                    responseCarList.forEach(item => {
                        temp_filteroption.push({
                            label: item.carName
                        });
                    });
                    setFilter(temp_filteroption);
                }
            }
        }).catch(function (err){
            // eslint-disable-next-line no-console
            console.log(err);
        });
    };

    const onFilterChange = (keyName, keyValue) => {
        setFormData({
            ...formData,
            ...{ [keyName]: keyValue }
        });
    };

    return (
        <Container>
            <Row style={{ padding: '20px 0', marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                <Col sm={8}>
                    <h3>Available cars</h3>
                </Col>
                <Col sm={4}>
                    <FilterComponent
                        onFilterChange={onFilterChange}
                        filterList={filterList}
                        selectedOption={formData.selectedFilterOption}
                    />
                </Col>
            </Row>
            {
                filterdCarListData && <Row>
                    {filterdCarListData.map((car, index) => {
                        return <CarListComponent carDetails={car} key={index} />;
                    })}
                </Row>
            }
        </Container>
    );
};

export default HomePage;
