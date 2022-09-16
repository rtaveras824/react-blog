import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useLocation
} from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from './context/Context';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          { user ? <Home /> : <Register /> }
        </Route>
        <Route path="/login">
          { user ? <Home /> : <Login /> }
        </Route>
        <Route path="/write">
          { user ? <Write /> : <Register /> }
        </Route>
        <Route path="/settings">
          { user ? <Settings /> : <Register /> }
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
