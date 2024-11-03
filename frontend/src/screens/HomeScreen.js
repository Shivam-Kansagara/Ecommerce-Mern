import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { Message } from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApi";

const HomeScreen = () => {
  const { isError, data: products, isLoading, error } = useGetProductsQuery({});

  if (isLoading) {
    return (
      <h1>
        <Loader />
      </h1>
    );
  }
  if (isError) {
    return (
      <h1>
        <Message variant={"dark"}>{error}</Message>
      </h1>
    );
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
