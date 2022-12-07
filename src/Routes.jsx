import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Sessions } from './components/Sessions/Sessions';
import { Home } from './pages/Home';
import { Seats } from './components/Seats/Seats'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/sessoes/:id' element={<Sessions />} />
        <Route path='/assentos/:id' element={<Seats />} />
      </Switch>
    </Router>
  );
};
