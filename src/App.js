import { useState } from 'react';
import './App.css';
import Navbar from './component/NavBar/NavBar'
import Txtbar from './component/NavBar/TextBar';
import Alert from './component/NavBar/Alert';
import About from './component/NavBar/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({msg:message,type:type})
  }

  const onSwitch = ()=>{
    if(mode === 'light'){
      setmode('dark');
      showAlert("Dark mode enabled","success");

      setTimeout(() => {
        setAlert(null);
      }, 1500);

    }else{
      setmode('light');
      showAlert("light mode enabled","success");

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  }

  return (
    <>
     <Router>
          <div className='container-fluid mx-0 my-0 px-0 py-0 min-vh-100' style={{backgroundColor:mode==='light'?'#ffffff':"rgb(31 41 55)",}}>
                <Navbar title="Navbar" home={"Text Util"} mode={mode} onSwitch={onSwitch}/>
                <Alert alert = {alert} />

            <Routes>
                    <Route path='/' element={
                      <div className='container'>
                        <Txtbar mode={mode} showAlert={showAlert} alert={setAlert}/>
                      </div>
                    }/> 
                        
                    <Route path='about' element={<About mode={mode}/>}/>        
            </Routes>

          </div>
        
     </Router>
    </>
  );
}

export default App;
