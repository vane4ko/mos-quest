import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import AchievePage from './components/pages/AchievePage';
import ThemePage from './components/pages/ThemePage';

function App(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <Routes>
            <Route path="/" element={<QuestPage />} />
            <Route path="/achievements" element={<AchievePage />} />
            <Route path="/themepage" element={<ThemePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
