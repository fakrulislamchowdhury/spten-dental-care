import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/specialistDoctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
