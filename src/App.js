import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, {useState} from 'react';

function App() {
//Dark Mode Function
const[mode, setMode]= useState("Light");

const ModeSet = ()=>{
    if(mode==="Light"){
        setMode("Dark");
        document.body.style.backgroundColor="#343a40";
        
    }
    else{
        setMode("Light");
        document.body.style.backgroundColor="White";

    }
}

//Alert Function
    const [alert, setAlert] = useState(null);
    const Alertfunc = (message, type)=>{
                setAlert({
                    msg:message,
                    type:type
                })
                setTimeout(()=>{
                    setAlert(null);
                },3000);

    }
    
    return (
    <>
    <Navbar mode={mode} title="TextUtils" ModeSet={ModeSet}/>
    <Alert alert={alert} />

    <div className = "container my-3">
        <Textform  Alertfunc={Alertfunc} mode={mode} textArea= "Enter the text to Analyze"/>
    </div>
    </>
    );
}
export default App;




// import React, { Component } from 'react';
// import NavbarNews from './Components/NavbarNews';
// import News from './Components/News';


// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavbarNews/>
//         <News/>
//       </div>
//     )
//   }
// }

// export default App




