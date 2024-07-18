import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import imagenes from "../assets/imagenes";


const Etica = () => {
    return (
        <>
            <Container>
                <Row className="d-flex align-items-center">
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4">Ética informática y delitos informáticos</p>

                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4">Etica</p>
                        <p className="fs-5">Se refiere a los principios y normas que guían el comportamiento correcto y justo en el uso de tecnologías de la información.</p>

                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={imagenes.etica} fluid />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        <Image src={imagenes.delito} fluid className="rounded float-end " />
                    </Col>
                    <Col xs={12} md={6}>
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4">Delitos Informaticos</p>
                    <p className="fs-5">Son actos ilícitos cometidos a través de sistemas informáticos o redes, como el hacking, phishing, fraude electrónico, entre otros.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Etica;