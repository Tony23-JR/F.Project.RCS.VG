import React, { useState } from 'react';
import FormNewUser from './FormNewUser';
import CardNewUser from './CardNewUser';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './MainStyle.css'

function NewUser() {
  const [personas, setPersonas] = useState([])
  const [persona, setPersona] = useState({
    userName: "",
    user: "",
    dni: "",
    age:"",
    email:"",
    password: "",
    validatePassword: ""
  })

  return (
    <>
      <Container>
        <h2 className="text-primary">Hola Nuevo Usuario!!</h2>
        <h4 className="text-primary">Complete todos los datos para que lo registremos</h4>
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
              {personas.map((item) => {
                return (
                  <CardNewUser key={item.dni} persona={item} />
                )
              })}
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewUser;