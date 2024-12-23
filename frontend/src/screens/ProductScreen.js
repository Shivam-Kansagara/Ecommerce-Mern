/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { Rating } from "../components/Rating";
import { useGetProductQuery } from "../slices/productsApi";
import Loader from "../components/Loader";
import { Message } from "../components/Message";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductScreen = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  function addToCartHandler(params) {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  }

  const {
    data: product,
    isError,
    error,
    isLoading,
  } = useGetProductQuery({ productId: productId });

  if (isLoading) {
    return (
      <h1>
        <Loader></Loader>
      </h1>
    );
  }
  if (isError) {
    console.log(error);
    return <Message variant={"dark"}>{error.message}</Message>;
  }

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
              <div>{product.description}</div>
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
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => {
                          return (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Button
                      variant="outline-dark my-1"
                      disabled={product.countInStock ? false : true}
                      onClick={addToCartHandler}
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
