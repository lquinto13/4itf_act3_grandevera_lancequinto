import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



function App() {
  return (
    <div>
      <div>
        <label>Username</label>
        <input type='text' className='thirtypx'/>
      </div>

      <div>
        <label >Password</label>
        <input type='password' className='thirtypx'/>
      </div>
  
    </div>

    
  );
}

export default App;
