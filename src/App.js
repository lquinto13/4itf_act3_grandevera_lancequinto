import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



function App() {
  return (
    <div className="layoutLogin" style={{  backgroundColor: '#DAFFEF'}}>
    <div></div>
    <div className="loginDiv">
    <Login></Login>
    </div>
    </div>
  );
}

export default App;
