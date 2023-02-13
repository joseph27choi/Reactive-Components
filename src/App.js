import './App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  //dynamic data
  //for when someone changes their @
  
  // can't output an object
  // const person = { name: 'yoshi', age: 30 };
  
  return (
    //called jsx
    //same syntax as html but different
    //changes className into class when converted
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

//export to use it elsewhere
export default App;
