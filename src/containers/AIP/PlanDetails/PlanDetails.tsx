import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';

const PlanDetails = () => {
  useTitle(getRouteByKey(ROUTE_KEY.AIP_DETAILS).title);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">AIP Details</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default PlanDetails;