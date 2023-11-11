import { Col, Container, Row } from 'react-bootstrap';
import TotalProfitEarned from './components/TotalProfitEarned';
import RecentTransactions from './components/RecentTransactions';
import TotalAssets from './components/TotalAssets';
import PendingOrders from './components/PendingOrders';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Colony Dashboard</h3>
        </Col>
      </Row>
      <Row>
        <TotalProfitEarned />
        <TotalAssets />
        <PendingOrders />
        <RecentTransactions />
      </Row>
    </Container>
  );
};

export default Dashboard;
