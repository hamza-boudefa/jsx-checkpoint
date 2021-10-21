import webdev from "./webdev.jpg"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title red">This is a title</h1>
      <img className="img" src={webdev} alt="firstImg" />
    <div className="i"> 
      <img className="i1" src="/65.jpg" alt="secImg"/>
      <video width={320} height={240} controls>
       <source className="i2" src="video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
    
  );
}

export default App;
