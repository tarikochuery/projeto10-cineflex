import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
      </Switch>
    </Router>
  )
}
