import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts(params) {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchProducts();
  }, []);

  if (error) return <div>failed to Load</div>;
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
