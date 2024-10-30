import { Link, useParams } from "react-router-dom";
import products from "../product";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
const ProductScreen = () => {
  const { productId } = useParams();
  const product = products.find((product) => {
    return product._id === productId;
  });

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={`${product.image}`} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                text={`${product.numReviews} reviews`}
                value={product.rating}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <dev>{product.description}</dev>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    <strong>
                      {product.countInStock ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Button
                      variant="outline-dark my-1"
                      disabled={product.countInStock ? false : true}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="btn btn-dark my-1"
                      disabled={product.countInStock ? false : true}
                    >
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
