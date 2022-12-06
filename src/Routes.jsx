import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Sessions } from './components/Sessions/Sessions';
import { Home } from './pages/Home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/sessoes/:id' element={<Sessions />} />
      </Switch>
    </Router>
  );
};
