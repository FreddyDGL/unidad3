import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imagenes from "../assets/imagenes";
import Image from 'react-bootstrap/Image';


const Legislacion = () => {
    return (
        <>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-2">Legislación informática</p>
                        <p className="fs-5">Se refiere al uso de los medios informáticos, uno de sus objetivos principales es el resguardar, así como establecer limitaciones, también reglas para que informática no se convierta en un medio por el cual se desvíen los fines para los cuales fue creada.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={imagenes.legislacion} fluid /><br></br><br></br>
                    </Col>
                </Row>
                <br></br>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} >
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-2 ">Privacidad</p>
                        <p className="fs-5">Es el derecho de las personas a controlar la información personal que comparten y a decidir cómo y con quién se comparte.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-2">Derechos de Autor</p>
                        <p className="fs-5"> Son derechos exclusivos que la ley concede a los autores sobre sus creaciones originales, permitiéndoles controlar el uso de sus obras y recibir compensación por su utilización.</p>
                    </Col>
                </Row>
                <Row>
                    <Image src={imagenes.ProteccionDatos} fluid />
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-2">Privacidad de los Datos</p>
                    <p className="fs-5" >Se refiere a las prácticas y regulaciones que aseguran que la información personal de los individuos sea recopilada, almacenada y utilizada de manera segura y respetuosa.</p>
                </Row>
            </Container>
        </>
    )
}

export default Legislacion;