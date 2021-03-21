import logo from './logo.svg';
import './App.css';
import Covid from './components/Covid/Covid'
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandHeader from './components/BrandHeader/BrandHeader';


function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
              <Covid />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
