import "./scss/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Homeevents from "./pages/Homeevents";
import Badges from "./pages/Badges";
function App() {
  return (
    <div className="App">


      <Header/>
     <Badges/>
     <Footer/>


    </div>
  );
}

export default App;
