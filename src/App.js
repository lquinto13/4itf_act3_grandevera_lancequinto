import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



function App() {
  return (
    <div className="layoutLogin" style={{  backgroundColor: '#DAFFEF'}}>
    <div style={{display:'flex', justifyContent:'center'}}>
    <img src='.\media\website.png' height="300" width="300"/>
    </div>
    <div className="loginDiv">
    <Login></Login>
    </div>
    </div>
  );
}

export default App;
