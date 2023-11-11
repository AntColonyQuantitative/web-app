import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './components/ContentCard';

const ExchangeManagement = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Crypto Exchange Management</h3>
      </Col>
    </Row>
    <Row>
      <ContentCard />
    </Row>
  </Container>
);

export default ExchangeManagement;