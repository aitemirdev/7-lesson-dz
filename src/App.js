import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';import store from './store';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/page1">Página 1</Link>
                </li>
                <li>
                  <Link to="/page2">Página 2</Link>
                </li>
                <li>
                  <Link to="/page3">Página 3</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Routes>
          </div>
        </Router>
      </Provider>
  );
};

export default App;