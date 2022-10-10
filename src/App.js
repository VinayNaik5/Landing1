
import './App.css';
import travel_1 from "./asset/travel-01.jpg";
import travel_2 from "./asset/travel-02.jpg";
import travel_3 from "./asset/travel-03.jpg";
import Hero from "./components/hero"
import NavBar from './components/NavBar';
import Slider from './components/Silder';


function App() {

  const navBarLinks = [ {url:"#", title:"Home"},{url:"#",title:"Contact Us"},{url:"#",title:"Packages"}] 
  return (
    <div className="App">
      <NavBar navBarLinks={navBarLinks}/>
      <Hero imageSrc={ travel_1 }/>
      <Slider imageSrc={ travel_2 } title= {"Be an explorer 1"} subtitle = "this is subtitle 1" />
      <Slider imageSrc={ travel_3 } title= {"Be an explorer 2"} subtitle = "this is subtitle 2" flipped={true} />
    </div>
  );
}

export default App;
