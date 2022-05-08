
import mandü from './img/mandü.svg';
import Dashboard from './img/Dashboard.svg';
import modelo from './img/Modelos.svg';
import Seguimiento from './img/Seguiemiento.svg';
import a from './img/A.svg';
import administrador from './img/Administrador.svg';
import manduu from './img/manduu.svg';
import {ShoppingOutlined,QuestionCircleOutlined,BellOutlined} from '@ant-design/icons'; 
import './App.css';
import { Button } from 'antd';
import ShowDivision from './components/ShowDivision';
import CreateDivision from './components/CreateDivision';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={mandü}  alt="logo"  className='App-img'/>
        <img src={Dashboard}  alt="logo" className='App-img'/>
        <Button type="primary" className='App-btn'>Organización</Button>
        <img src={modelo}  alt="logo" className='App-img'/>
        <img src={Seguimiento}  alt="logo" className='App-img'/>
        <ShoppingOutlined  className='App-icon1'/>
        <QuestionCircleOutlined className='App-icon'/>
        <BellOutlined className='App-icon'/>
        <img src={a}  alt="logo" className='App-a'/>
        <img src={administrador}  alt="logo" className='App-img'/>
        <img src={manduu}  alt="logo" className='App-img2'/>
      </header>
      
    </div>
    
    <div className="App-body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowDivision/>}/>
          <Route path='/create' element={<CreateDivision/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    </>
    
    
  );
}

export default App;
