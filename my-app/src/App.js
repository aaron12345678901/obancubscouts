import "./scss/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Homeevents from "./pages/Homeevents";
import Badges from "./pages/Badges";
import Login from "./pages/Login";
import Games from "./pages/Games";

function App() {
  return (
    <div className="App">


      <Header/>
     <Games/>
     <Footer/>


    </div>
  );
}

export default App;
