
import  PrimarySearchAppBar from './components/about.tsx';
import SignIn from './components/SignIn.tsx';

import SignUp from './components/SignUp.tsx';
import './footer.css';
import Footer from './components/footer.tsx';
import {Route,Routes} from "react-router-dom";
import YourContact from './components/yourcontact.tsx';

import Home from './components/home.tsx';



function App() {
  return (
    <div className="App">
      < PrimarySearchAppBar/>
      
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/yourcontact" element={<YourContact/>}/>
        <Route path="/" element={<Home/>}/>
       
       

    
      
      </Routes>
    
    <Footer/>

     
      
      
    </div>
  );
}

export default App;
