import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagenes from "../assets/imagenes";

const Caracteristicas = () => {
    return (
        <>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} lg={4}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4"> Características de los delitos informáticos tipificados en México</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">1. Hacking: Acceso no autorizado a sistemas informáticos.</li>
                            <li class="list-group-item fs-5">2. Phishing: Obtención fraudulenta de información personal a través de engaños electrónicos.</li>
                            <li class="list-group-item fs-5">3. Robo de identidad: Uso indebido de datos personales para cometer fraudes.</li>
                            <li class="list-group-item fs-5">4. Distribución de malware: Propagación de software malicioso con el fin de dañar o acceder a información.</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Col >

                    <Col xs={12} lg={4}>
                        <Image src={imagenes.codigoConducta} fluid />
                    </Col>

                    <Col xs={12} lg={4}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4"> Aspectos legales relacionados con delitos informáticos en México</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">1. Código Penal Federal: Incluye disposiciones sobre delitos informáticos, estableciendo penas para quienes cometan estos ilícitos.</li>
                            <li class="list-group-item fs-5">2. Ley Federal de Protección de Datos Personales en Posesión de los Particulares: Sanciona el uso indebido de datos personales.</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
                <Row className="justify-items-center">
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4"> Proceso de elaboración de códigos de conducta y ética informática</p>
                    <ul class="list-group">
                        <li class="list-group-item fs-5">1. Identificación de valores: Definir los principios y valores que guiarán el código de conducta.</li>
                        <li class="list-group-item fs-5">2. Consulta: Involucrar a las partes interesadas para obtener sus perspectivas y recomendaciones.</li>
                        <li class="list-group-item fs-5">3. Redacción: Escribir el código de conducta, especificando las normas y comportamientos esperados.</li>
                        <li class="list-group-item fs-5">4. Revisión y aprobación: Asegurarse de que el código cumple con las normativas legales y éticas.</li>
                        <li class="list-group-item fs-5">5. Difusión: Comunicar el código a todos los miembros de la organización y proporcionar formación sobre su contenido y aplicación.</li>
                    </ul>
                </Row>
            </Container>
        </>
    )
}

export default Caracteristicas;