
// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import UserForm from './components/UserForm';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  
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

const removeBodyClasses=()=>
{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dack')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-primary')
}

  const toggleMode = (cls) => {
    // console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#07202c';
      document.body.style.color = 'white';
      showAlert("darkmode have been enable", "success");
     
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'darkmodeblack';
      showAlert("lightmode have been enable", "success");
      // document.title = 'Textutils - Light Mode';
    }
  }
  //it run in every render
  const [count,setcount]=useState(0)
  useEffect(() => {
      console.log("hey welcome to my page");
  });

  //it run first in render
  useEffect(() => {
  const timer = setTimeout(() => {
     console.log('Tick');
  }, 1000);

  return () => {
    clearTimeout(timer);
     console.log('Cleaned up');
  };
}, []);

  

  return (
    <>
     <Router>
      
      <Navbar title="Shree Ram" Abouttext="AboutUs" UserForm="Form" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <button onClick={()=>setcount((count)=>count+1)}>
          count is {count}
        </button>
        <Routes>
         <Route path="/form" element={ <>
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>User Registration App</h2>
        <UserForm onSubmit={handleFormSubmit} />
        {submittedData && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
            <h3>Submitted Details:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
          </div>
        )}
      </div>
    </>
  }
/>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm Heading="Try Textutils - Word Counter, Character Counter, Remove Extra spaces" showAlert={showAlert} mode={mode}  />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;


 