import { useRef, useState } from "react";


const useFullScreen = () => {
  const element = useRef();
  const [isFull, setIsFull] = useState(false);
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
    }
    setIsFull(!isFull);
  }
  const exitFull = () => {
    if (isFull) document.exitFullscreen();
  };
  return {element, triggerFull, exitFull };
}


function App() {
  const {element, triggerFull, exitFull} = useFullScreen();
  return (
    <div className="App" style={{height: '1000vh'}}>
      <h1>Hi</h1>
      <div ref={element}  style={{width: '50vw'}}  >
        <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*"alt="cat" style={{width:'100%'}}/>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
}

export default App;
