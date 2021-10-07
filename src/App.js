import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './Components/MyNav';
import MyFoot from './Components/MyFoot';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';




function App() {
  
  // console.log("string")
  return (
    <div>
      <MyNav title="b00ks =  	
&#128155;" />
    <div>
        <Welcome greetingsName = "b00ks" subTitle = "This is a great place for books comrade!"/>
        </div> 
        <LatestRelease />  
    
      <MyFoot />
    </div>
  );
}

export default App;
