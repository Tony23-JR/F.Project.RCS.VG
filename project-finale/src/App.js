import React, { useState } from 'react';
import './App.css';
import FormNewUser from './Components/FormNewUser'
import CardNewUser from './Components/CardNewUser'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [personas, setPersonas] = useState([])
  const [persona, setPersona] = useState({
    nombre: "",
    ocupacion: "",
    edad: "",
    dni: ""
  })
  return (
    <React.Fragment>
      <Container>

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
    </React.Fragment>
  );
}

export default App;
