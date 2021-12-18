import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { default as DefaultLayout } from './layouts/Default';

class App extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </DefaultLayout>
    );
  }
}

export default App;
