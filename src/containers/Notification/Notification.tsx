import React from "react";
import { ApolloError } from "@apollo/client";
import { styled } from "styled-components";
import { Alert } from "react-bootstrap";

interface NotificationMessage {
  children?: React.ReactNode;
  status: StatusProps;
}

interface NotificationProps {
  error?: ApolloError;
  message?: string;
}

type StatusProps = "SUCCESS" | "ERROR";

const NotificationMessage = ({ children, status }: NotificationMessage) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <Alert
      variant={status === "ERROR" ? "danger" : "success"}
      show={!!children && isOpen}
      onClick={handleClick}
    >
      {children}
    </Alert>
  );
};

const Notification = ({ error, message }: NotificationProps) => {
  let defaultErrorMessage = "Something went wrong, please try again";

  let status: StatusProps = error ? "ERROR" : "SUCCESS";

  return (
    <Container>
      {error ? (
        // Display network error
        error.networkError ? (
          <NotificationMessage status={status}>
            {error.networkError.message}
          </NotificationMessage>
        ) : error.graphQLErrors && error.graphQLErrors.length > 0 ? (
          error.graphQLErrors.map((graphQLError, i) => {
            // Display graphQL error
            // TODO: we may need to add more specifi error types in the future
            if (graphQLError.originalError?.message) {
              return (
                <NotificationMessage key={i} status={status}>
                  {graphQLError.originalError.message}
                </NotificationMessage>
              );
            }
            return null;
          })
        ) : (
          //Display default error message if some unkown graphQL errors occured
          <NotificationMessage status={status}>
            {defaultErrorMessage}
          </NotificationMessage>
        )
      ) : (
        //Display success message
        message && (
          <NotificationMessage status={status}>{message}</NotificationMessage>
        )
      )}
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  max-width: 480px;
  position: fixed;
  top: 10;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 1030;
  cursor: pointer;
`;
