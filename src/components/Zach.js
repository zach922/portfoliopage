import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'bootstrap-4-react';
import { BsCircleHalf } from 'react-icons/bs';
import './stylesheets/Zach.css';

export default class Zach extends React.Component {


    render() {
        return (
        <React.Fragment className="intro">
            <Container>
                <Row>
                    <Col col="col-md-6">
                        <motion.div
                            className="text-intro"
                            initial={{ x:-400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1}}
                            transition={{  duration:1 }}
                        >
                                <h2>
                                    Meet Me,
                                </h2>
                                <motion.h1
                                    initial= {{opacity: 0}}
                                    animate= {{opacity: 1}}
                                    transition= {{delayChildren: 1}}
                                >
                                    <strong>Zach <br></br>Schmitz</strong>
                                </motion.h1>
                                <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                        </motion.div>
                    </Col>
                    <Col col="col-md-2">
                    </Col>
                    <Col col="col-md-4">
                        <motion.div
                            initial={{ x: 400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1}}
                            transition={{ duration:1 }}
                            className="image-intro"
                            >
                            <BsCircleHalf className="image"/>
                            
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
}
