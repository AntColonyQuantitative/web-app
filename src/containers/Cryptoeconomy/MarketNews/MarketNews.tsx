import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import { ROUTE_KEY, getRouteByKey } from '@/routes/routeConfig';

const MarketNews = () => {
  useTitle(getRouteByKey(ROUTE_KEY.CRYPTO_NEWS).title);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Crypto Market News</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketNews;