import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

const Product2 = ({id, name, title,image, price}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card {title}</Card.Title>
            <Card.Text>
                Name: {name}
            </Card.Text>
            <Card.Text>
                Price: {price}
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      );
}

export default Product2