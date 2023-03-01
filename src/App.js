
import  PrimarySearchAppBar from './components/about.tsx';
import SignIn from './components/SignIn.tsx';
//import Footer from './components/footer.tsx';
import SignUp from './components/SignUp.tsx';
import './footer.css';
import Footer from './components/footer.tsx';

function App() {
  return (
    <div className="App">
      
      < PrimarySearchAppBar/>
      <SignUp/>
      <SignIn/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
