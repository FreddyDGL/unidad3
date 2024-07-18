import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import imagenes from "../assets/imagenes";


const Leyes = () => {
    return (
        <>
            <Container>
                <Row>
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-2"> Leyes nacionales e internacionales</p>
                </Row>
                <Row className="d-flex align-items-center" >
                    <Col xs={12} lg={4}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4">Derechos de autor</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">Ley Federal del Derecho de Autor (México): Regula los derechos de los creadores sobre sus obras.</li>
                            <li class="list-group-item fs-5">Convenio de Berna: Tratado internacional que protege las obras literarias y artísticas.</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Image src={imagenes.leyes} fluid />
                    </Col>
                    <Col xs={12} lg={4}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4">Privacidad y protección de datos</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México): Regula el tratamiento de datos personales en el ámbito privado.</li>
                            <li class="list-group-item fs-5">Reglamento General de Protección de Datos (GDPR, Europa): Establece normas para la protección de datos personales en la Unión Europea.</li>
                        </ul>
                        <br></br><br></br><br></br><br></br>
                    </Col>
                </Row>
                <Row>
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-3">Trámites y requisitos de registro de obras ante la institución de derechos de autor</p>
                    <p className="fs-5">Para registrar una obra ante la institución de derechos de autor en México (Instituto Nacional del Derecho de Autor - INDAUTOR), se deben cumplir con los siguientes requisitos:</p>
                    <ul class="list-group">
                        <li class="list-group-item fs-5">1. Llenar el formulario de registro correspondiente.</li>
                        <li class="list-group-item fs-5">2. Presentar una copia de la obra a registrar.</li>
                        <li class="list-group-item fs-5">3. Pagar la tarifa correspondiente al trámite.</li>
                        <li class="list-group-item fs-5">4. Proporcionar identificación oficial del autor o del representante legal.</li>
                    </ul>
                </Row>
            </Container>
        </>
    )
}
export default Leyes;