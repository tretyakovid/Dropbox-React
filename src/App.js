import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Collaboration from "./components/Collaboration/Collaboration";
import Security from "./components/Security/Security";
import Spheres from "./components/Spheres/Spheres";
import Matherial from "./components/Matherial/Matherial";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutUs />
      <Collaboration />
      <Security />
      <Spheres />
      <Matherial />
      <Footer />
    </div>
  );
}
