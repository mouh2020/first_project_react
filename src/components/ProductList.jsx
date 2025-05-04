import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList({ data }) {
  const { category } = useParams();
  const filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

  return (
    <Container className="my-4">
      {filteredData.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredData.map((e) => (
            <Col key={e.id}>
              <Card>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <Card.Text>Price: ${e.price}</Card.Text>
                  <Link to={`/details/${e.id}`}>Details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <h1 className="text-center">No products found</h1>
      )}
    </Container>
  );
}

export default ProductList;
