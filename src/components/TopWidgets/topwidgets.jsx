import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./topwidgets.css";
const TopWidgets = () => {
  const { totalProducts, totalStoreValue, outOfStock, categoriesCount } =
    useSelector((state) => state.inventory);
  return (
    <Row>
      <Col md={3}>
        <div>
          <Card className="text-center">
            <Card.Body className="card-body">
              <Card.Title>Total Products</Card.Title>
              <Card.Text>{totalProducts}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col md={3}>
        <div className="card-body">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Store Value</Card.Title>
              <Card.Text>${totalStoreValue.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col md={3}>
        <div className="card-body">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Out of Stock</Card.Title>
              <Card.Text>{outOfStock}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col md={3}>
        <div className="card-body">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <Card.Text>{categoriesCount}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default TopWidgets;
