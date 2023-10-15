
import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import paris from './paris.jpg';
import pb from './pb.jpg';
import bali from './bali.jpg';

function App() {
  return (
    <div className='body'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Mira voyage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">destination</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">devis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">assistance</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='cards'>
        <div className='card1'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={paris} />
            <Card.Body>
              <Card.Title>Paris</Card.Title>
              <Card.Text>
              La ville de Paris, véritable carte postale posée des deux côtés de la Seine, ne cesse de briller de mille feux. Que ce soit le 14 juillet, jour de la Fête Nationale, ou pour les fêtes de fin d’années qui voient toutes les avenues, la Tour Eiffel, l’Hôtel de Ville, et les Grands Magasins se couvrir de centaines de milliers d’ampoules pour illuminer Paris et en faire la seule vraie ‘Ville Lumière’.

 
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Par personne dans une chambre double :  à partir de 3590 TTC </ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Voyages en privé sur mesure</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">reserver</Card.Link>
              <Card.Link href="#">consulte</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pb} />
          <Card.Body>
            <Card.Title>pays bas</Card.Title>
            <Card.Text>
            Choisir de passer ses vacances aux Pays-Bas, c'est s'offrir le charme d'un beau pays dont les terres ont été gagnées sur l'eau et qui est chargé d'histoire. Beau comme une peinture flamande, le pays de Van Gogh doit sa renommée touristique à ses éternels moulins à vent, mais aussi à sa capitale Amsterdam et à sa célèbre vie nocturne.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>voyage au pays bas de 8 nuits / 11 jours</ListGroup.Item>
            <ListGroup.Item>Prix : A partir de 4900 DT</ListGroup.Item>
            <ListGroup.Item>Voyages en privé sur mesure</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">reserver</Card.Link>
            <Card.Link href="#">consulte</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bali} />
          <Card.Body>
            <Card.Title>Bali</Card.Title>
            <Card.Text>
            Découvrez les richesses de Bali et profitez d'un séjour de rêve au coeur d'une nature splendide et surprenante. Ce voyage vous permet de découvrir Bali avec sa diversité, à travers ses temples étonnants, sa nature magnifique et sa culture authentique. Nous créons des voyages sur mesure adaptés à vos besoins, envies et votre budget
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>voyage à Bali de 8 nuits / 11 jours</ListGroup.Item>
            <ListGroup.Item>Prix : A partir de 4900 DT</ListGroup.Item>
            <ListGroup.Item>Voyages en privé sur mesure</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">reserver</Card.Link>
            <Card.Link href="#">cosutle</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
