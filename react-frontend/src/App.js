import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CostumNavbar from './components/CostumNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <CostumNavbar/>
          <Route exact path="/" component={HomePage}/>
          <Route path='/dashboard' component= {DashboardPage}/>
      </div>
    </Router>
  );
}

export default App;
