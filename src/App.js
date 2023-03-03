
import  PrimarySearchAppBar from './components/about.tsx';
import SignIn from './components/SignIn.tsx';

import SignUp from './components/SignUp.tsx';
import './footer.css';
import Footer from './components/footer.tsx';
import {Route,Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      < PrimarySearchAppBar/>
      
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>

    
      
      </Routes>
    <Footer/>

     
      
      
    </div>
  );
}

export default App;
