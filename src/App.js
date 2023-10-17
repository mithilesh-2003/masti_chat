import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Forgetpassword from './Forgetpassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"element={<Login/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Signup"element={<Signup/>}/>
          <Route path="/Home"element={<Home/>}/>
          <Route path='/Forgetpassword'element={<Forgetpassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
