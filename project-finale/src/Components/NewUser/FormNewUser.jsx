import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormNewUser = ({ setPersona, persona, personas, setPersonas }) => {

    function handleChange(event) {
        setPersona({
            ...persona,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        FormCompleto()
        if (FormCompleto()) {
            setPersonas([...personas, persona])
            setPersona({
                ...persona,
            })
        } else {
            alert('El formulario tiene que estar completo')
        }
        console.log("formulario completo", FormCompleto())
        // dniRepetido()   
    }

    // function FormValido(){
    //     return (FormCompleto() && dniRepetido())
    //   }

    function FormCompleto() {
        if (persona.nombre !== ''
            && persona.usuario !== ''
            && persona.dni !== ''
            && persona.clave !== ''
            && persona.repetirClave !== '') {
            return true;
        }
        else {
            return false;
        }
    }

    // function dniRepetido(){
    //     let existeDni = false;
    //     {personas.map((item) => {
    //       if(item.dni==persona.dni.value){
    //         existeDni=true;
    //       }
    //     });
    //     if(existeDni){alert('Ya existe un alumno con ese DNI');}
    //     return !existeDni;
    // }

    return (
        <>
            <Form onSubmit={handleSubmit} name="formNewUser">
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleChange}
                        name="nombre"
                        value={persona.nombre} />
                </Form.Group>
                <Form.Group controlId="usuario">
                    <Form.Label>usuario</Form.Label>
                    <Form.Control type="text" placeholder="usuario" onChange={handleChange} name="usuario"
                        value={persona.usuario} />
                </Form.Group>
                <Form.Group controlId="dni">
                    <Form.Label>dni</Form.Label>
                    <Form.Control type="number" placeholder="dni" onChange={handleChange}
                        name="dni"
                        value={persona.dni} />
                </Form.Group>
                <Form.Group controlId="clave">
                    <Form.Label>clave</Form.Label>
                    <Form.Control type="text" placeholder="clave" onChange={handleChange}
                        name="clave"
                        value={persona.clave} />
                </Form.Group>
                <Form.Group controlId="repetirClave">
                    <Form.Label>Repetir Clave</Form.Label>
                    <Form.Control type="text" placeholder="Repetir Clave" onChange={handleChange}
                        name="repetirclave"
                        value={persona.repetirClave} />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    Enviar
            </Button>
            </Form>
        </>
    )
}

export default FormNewUser;