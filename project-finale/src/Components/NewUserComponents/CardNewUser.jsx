import React from 'react';
import { Card } from 'react-bootstrap';

const CardNewUser = ({ persona }) => {
     return (
        <React.Fragment>
            
                <Card border="warning" style={{ width: '18rem', margin:'5px' }}>
                    <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"/>
                    <Card.Body>
                        <Card.Title className="text-center">Card de {persona.user}</Card.Title>
                        <ul>
                            <li>Nombre: {persona["firstName"]}</li>
                            <li>Usuario: {persona["user"]}</li>
                            <li>DNI: {persona.dni}</li>
                        </ul>
                    </Card.Body>
                </Card>
            
        </React.Fragment>
    )
}

export default CardNewUser;