import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Accordion from "react-bootstrap/Accordion";

import imagenes from "../assets/imagenes";


const Portada = () => {

    return (
        <Container>
            <Row className="justify-content-mg-center">
                <Col xs lg="2" > </Col>
                <Col xs={11} md={9}>
                    <Image src={imagenes.img2} fluid />
                </Col>
                <Col xs lg="1"> </Col>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>INTRODUCCION</Accordion.Header>
                        <Accordion.Body>
                            La seguridad de la información se ha convertido en una prioridad. Esta pagina web examina los principios fundamentales de la seguridad de la información  y las estrategias y tecnologías empleadas para proteger la integridad, confidencialidad y disponibilidad de los datos.
                            <Row></Row>
                            En conjunto, este trabajo ofrece una visión integral de la legislación informática y la ética en el uso de la tecnología, destacando la importancia de las leyes y principios éticos en la creación de un entorno digital seguro y justo. La cooperación internacional y la actualización constante de las normativas son esenciales para enfrentar los desafíos en constante evolución del mundo digital.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Row>
        </Container>
    )

}

export default Portada;