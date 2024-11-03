import Spinner from "react-bootstrap/Spinner";

function loader() {
  return (
    <Spinner
      animation="grow"
      style={{
        height: "100px",
        width: "100px",
        display: "block",
        margin: "auto",
      }}
    />
  );
}

export default loader;
