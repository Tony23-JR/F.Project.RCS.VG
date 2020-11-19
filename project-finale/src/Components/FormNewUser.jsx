import React from 'react'
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
            && persona.ocupacion !== ''
            && persona.edad !== ''
            && persona.dni !== '') {
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
            <Form onSubmit={handleSubmit} name="formulario">
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleChange}
                        name="nombre"
                        value={persona.nombre} />
                </Form.Group>
                <Form.Group controlId="ocupacion">
                    <Form.Label>ocupacion</Form.Label>
                    <Form.Control type="text" placeholder="ocupacion" onChange={handleChange} name="ocupacion"
                        value={persona.ocupacion} />
                </Form.Group>
                <Form.Group controlId="edad">
                    <Form.Label>edad</Form.Label>
                    <Form.Control type="text" placeholder="edad" onChange={handleChange}
                        name="edad"
                        value={persona.edad} />
                </Form.Group>
                <Form.Group controlId="dni">
                    <Form.Label>dni</Form.Label>
                    <Form.Control type="text" placeholder="dni" onChange={handleChange}
                        name="dni"
                        value={persona.dni} />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    Enviar
            </Button>
            </Form>
        </>
    )
}

export default FormNewUser;