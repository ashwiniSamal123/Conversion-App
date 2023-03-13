import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Converter from './components/converter';

function App() {
  return (
    
    <div className='main'>
      <div className='sub-main' >
        <Container>
          <Row>
            <Col>
            <Header/>
            <Converter/>
        
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
}

export default App;
