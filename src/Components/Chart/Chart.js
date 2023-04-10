import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './Charts.css';


const Chart = () => {
    const data = [
        { technologies: 'Java', value: 100 },
        { technologies: 'Python', value: 90 },
        { technologies: 'React', value: 70 },
        { technologies: 'Javascript', value: 80 },
        { technologies: 'HTML', value: 70 },
        { technologies: 'Css', value: 90 },
        { technologies: 'Node js', value: 100 },
    ]
    return (
        <>
            <Container className='my-5'>
                <h1 className=' servicetitle' style={{ color: "rgb(0, 119, 255)" }}>My Technologies</h1>
                <Row>
                    <Col className='w-lg-50 w-sm-full' style={{ height: '300px' }} lg={6} md={6} sm={12}>
                        <ResponsiveContainer>

                            <BarChart width={100} height={300} data={data}>
                                <XAxis dataKey="technologies"></XAxis>
                                <Tooltip></Tooltip>
                                <Bar dataKey="value" fill="rgb(0, 119, 255)" />
                            </BarChart>

                        </ResponsiveContainer>


                    </Col>
                    <Col className='text-justify' lg={6} md={12} sm={12}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi rerum saepe ducimus, maiores quod doloribus voluptas consequatur eum itaque enim illum dolor ea repellendus natus officiis quis expedita necessitatibus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi rerum saepe ducimus, maiores quod doloribus voluptas consequatur eum itaque enim illum dolor ea repellendus natus officiis quis expedita necessitatibus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi rerum saepe ducimus, maiores quod doloribus voluptas consequatur eum itaque enim illum dolor ea repellendus natus officiis quis expedita necessitatibus.</p>

                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Chart;