import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ProductList({data}) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {data.map((e) => {
        return (
            <Container>
                <Col key={e.id}>
                    <Card>
                        <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title>{e.title}</Card.Title>
                            <Card.Text>
                                {e.description}
                            </Card.Text>
                            <Card.Text>
                                Price: {e.price}
                            </Card.Text>
                            <Link to={`/details/${e.id}`}>Details </Link>

                        </Card.Body>
                    </Card>

                
                
                </Col>
            </Container>

        )
      
      })}</Row>
  )
}

export default ProductList