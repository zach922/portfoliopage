import React from 'react';
import {Container, Row, Col} from 'bootstrap-4-react';
import { motion } from 'framer-motion';
import { AiFillAccountBook } from 'react-icons/ai';
import './stylesheets/Shop.css';

export default function Shop({props, onClick}) {  

    return (
        <React.Fragment className="shop">
            <Container>
                <Row>
                    <Col col="md-4">
                        <motion.div className="motion-icon"   
                            initial={{x:-125 ,opacity:0}}
                            animate={{x: 0, opacity:1}}
                            transition={{ duration: 1 }}
                        >
                            <AiFillAccountBook className="icon" />
                        </motion.div>
                    </Col>
                    <Col col="md-4">
                        <motion.div className="motion-icon"
                            initial={{x:-125 ,opacity:0}}
                            animate={{x: 0, opacity:1}}
                            transition={{ delay:1, duration: 1 }}
                        >
                            <AiFillAccountBook className="icon"/>
                        </motion.div>
                    </Col>
                    <Col col="md-4">
                        <motion.div className="motion-icon"
                            initial={{x:-125 ,opacity:0}}
                            animate={{x: 0, opacity:1}}
                            transition={{ delay:2 ,duration: 1 }}
                        >
                            <AiFillAccountBook className="icon"/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}