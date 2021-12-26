import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { default as DefaultLayout } from './layouts/Default';
import Home from './pages/Home';
import CatInfo from './pages/CatInfo';

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":imageId" element={<CatInfo />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
