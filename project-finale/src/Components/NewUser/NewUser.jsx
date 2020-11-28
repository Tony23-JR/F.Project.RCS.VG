import React, { useState } from 'react';
import FormNewUser from './Components/NewUser/FormNewUser';
import CardNewUser from './Components/NewUser/CardNewUser';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function NewUser() {
  const [personas, setPersonas] = useState([])
  const [persona, setPersona] = useState({
    nombre: "",
    usuario: "",
    dni: "",
    clave: "",
    repetirClave: ""
  })

  return (
    <>
      <Container>
        <h3 className="text-primary">Hola Card</h3>
        <Row>
          <Col className="mb-4" xs={12}>
            <FormNewUser
              setPersona={setPersona}
              persona={persona}
              personas={personas}
              setPersonas={setPersonas}
            />
          </Col>
          <Col>

            <div className="d-flex flex-wrap">
              <CardNewUser />
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewUser;