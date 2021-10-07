import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './Components/MyNav';
import MyFoot from './Components/MyFoot';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Registration from './Components/Registration'





function App() {
  
  return (
    <div>
      <Router>
        
      <MyNav title="b00ks =  	
&#128155;" />
    <div>
      {/* <Registration/> */}
    <Route path="/" exact render={(props) => <Welcome greetingsName = "b00ks" subTitle = "This is a great place for books comrade!"/>}/>
        
        </div> 
        <Route path="/" exact component={LatestRelease} />  
    
        <Route path="/register" exact component={Registration} />

      <MyFoot />
      </Router>
    </div>
  );
}

export default App;
