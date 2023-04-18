import "./scss/app.css";
import Header from "./components/Header";
import Childrensheader from "./components/Childrensheader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homeevents from "./pages/Homeevents";
import Badges from "./pages/Badges";
import Login from "./pages/Login";
import Games from "./pages/Games";
import Childrensprofile from "./pages/Childrenspages/Childrensprofile";
import Cprofilemerits from "./pages/Childrenspages/Cprofilemerits";
import Aduiltandchild from "./pages/galleries/Aduiltandchild";


function App() {
  return (
    <div className="App">
      <Header />

      <Aduiltandchild />

      <Footer />
    </div>
  );
}

export default App;
