import React from 'react';
import { Card, Button } from 'react-bootstrap';


function Album() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>titulo del disco</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae omnis beatae sint quo molestiae odit nemo animi inventore reprehenderit repellendus asperiores aperiam tempora saepe, vero similique sunt vel quae..
          </Card.Text>
          <Button variant="dark">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    );
  }


  
  export default Album;