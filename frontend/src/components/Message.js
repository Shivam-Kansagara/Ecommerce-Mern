import Alert from "react-bootstrap/Alert";

export const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};
