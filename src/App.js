
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

  
  const [mode, setMode] = useState('light');//whether dark mode is enable or not.
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#07202c';
      document.body.style.color = 'white';
      showAlert("darkmode have been enable", "success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils - Dark Mode';
      // }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'darkmodeblack';
      showAlert("lightmode have been enable", "success");
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
    
      <Navbar title="Shree Ram" Abouttext="AboutUs" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
       
          <About />
          <TextForm Heading="Enter your own Content." />
        
      </div>
   
    </>
  );
}
export default App;


 