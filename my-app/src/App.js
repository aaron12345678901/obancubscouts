import "./scss/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Homeevents from "./pages/Homeevents";

function App() {
  return (
    <div className="App">
      <Header/>
     <Homeevents/>
     <Footer/>
    </div>
  );
}

export default App;
