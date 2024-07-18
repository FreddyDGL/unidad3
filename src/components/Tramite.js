import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import imagenes from "../assets/imagenes";

const Tramite = () => {
    return (
        <>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} lg={4}>
                        <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4"> Proceso de trámite de registro de obras ante la institución de derechos de autor</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">1. Preparación: Reunir los documentos y requisitos necesarios.</li>
                            <li class="list-group-item fs-5">2. Solicitud: Presentar la solicitud de registro en línea o en las oficinas del INDAUTOR.</li>
                            <li class="list-group-item fs-5">3. Revisión: La institución revisa la documentación y la obra presentada.</li>
                            <li class="list-group-item fs-5">4. Resolución: Si todo está en orden, se emite el certificado de registro de la obra.</li>
                        </ul>
                    </Col >

                    <Col xs={12} lg={4}>
                    <Image src={imagenes.tramite} fluid/>
                    </Col>

                    <Col xs={12} lg={4}>
                    <p className="text-uppercase shadow p-2 mb-5 bg-body-tertiary rounded fs-4"> Proceso de elaboración de avisos de privacidad</p>
                        <ul class="list-group">
                            <li class="list-group-item fs-5">1. Recolección de datos: Identificar qué datos personales se van a recolectar.</li>
                            <li class="list-group-item fs-5">2. Redacción: Escribir el aviso de privacidad, incluyendo información sobre el responsable del tratamiento de datos, finalidades del tratamiento, derechos del titular, mecanismos para ejercer los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), y medidas de seguridad.</li>
                            <li class="list-group-item fs-5">3. Revisión legal: Asegurarse de que el aviso cumple con la legislación vigente.</li>
                            <li class="list-group-item fs-5">4. Publicación: Poner el aviso de privacidad a disposición de los interesados, generalmente en el sitio web de la organización o en un lugar visible en las instalaciones físicas.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tramite;