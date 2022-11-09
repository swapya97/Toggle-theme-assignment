import info from './components/Info';
import './App.css';
import Element from './components/Element'
import {useState,useEffect} from 'react';
function App() {
const [theme,setTheme]=useState("light")

useEffect(() => {
  document.body.className=theme;
},[theme])


function toggleTheme(){
  if (theme==="light"){
    setTheme("dark");
  }else{
    setTheme("light");
  }
  
}

  return (
<div className="main_container">
  <div className="header">
<h1 className="heading">Overreacted</h1>
<button onClick={toggleTheme}>Toggle</button>
  </div>
  
<Element
heading={info[0].heading}
time={info[0].time}
information={info[0].information}
/>   
<Element
heading={info[1].heading}
time={info[1].time}
information={info[1].information}
/>    
<Element
heading={info[2].heading}
time={info[2].time}
information={info[2].information}
/>    
<Element
heading={info[3].heading}
time={info[3].time}
information={info[3].information}
/>     
</div>
  );
}

export default App;
