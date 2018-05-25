import React {Component} from React;
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
const NavBar = () => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div>
);
const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
Hello to my App    </p>
  </div>
);
const Feed = (props) => (
  <Template title="Feed"/>
);
const Profile = (props) => (
  <Template title="Profile"/>
);
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Feed}/>
        <Route path="/profile" component={Profile}/>
      </Router>
    );
  }
}
export default App;
