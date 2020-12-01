import React from 'react';
import { Card } from 'react-bootstrap';

const CardNewUser = ({ persona }) => {
     return (
        <React.Fragment>
            
                <Card border="warning" style={{ width: '18rem', margin:'5px' }}>
                    <Card.Img variant="top" src="https://img1.freepng.es/20180403/hde/kisspng-player-s-handbook-dungeons-dragons-tiefling-demo-planescape-torment-5ac40db2a808e1.1200443715227980026883.jpg"/>
                    <Card.Body>
                        <Card.Title className="text-center">Welcam {persona.user}!!</Card.Title>
                        <ul>
                           Nombre: {persona["userName"]}
                           Usuario: {persona["user"]}
                           </ul>
                    </Card.Body>
                </Card>
            
        </React.Fragment>
    )
}

export default CardNewUser;