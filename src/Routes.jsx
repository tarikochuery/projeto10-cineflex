import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Sessions } from './components/Sessions/Sessions';
import { Success } from './components/Success/Success';
import { Home } from './pages/Home';
import { Seats } from './components/Seats/Seats';
import { useState } from 'react';

export const Routes = () => {
  const [bookedSeatsInfo, setBookedSeatsInfo] = useState() 

  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/sessoes/:id' element={<Sessions />} />
        <Route path='/assentos/:id' element={<Seats setBookedSeatsInfo={setBookedSeatsInfo} />} />
        <Route path='/sucesso' element={<Success bookedSeatsInfo={bookedSeatsInfo} />} />
      </Switch>
    </Router>
  );
};
