import Alert from "react-bootstrap/Alert";

export const Message = ({ variant, error }) => {
  return <Alert variant={variant}>{error}</Alert>;
};
