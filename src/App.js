import React from "react";
import { Row, Col } from "react-bootstrap";

import { SearchBar } from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
        <header>
            <h1 className="title">Recipe Posts</h1>
            <hr className="hr-header" />
        </header>

        <SearchBar/>

        <Row>
            <Col xs={12} md={6}>
            </Col>
            <Col xs={12} md={6}>
            </Col>
        </Row>
    </>
  );
}

export default App;
