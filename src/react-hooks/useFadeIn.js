import { useEffect, useRef } from "react";

const useFadeIn = (duration = 2, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (duration && typeof duration !== "number") return;
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return {ref: element, style: {opacity: 0}};
}

function App() {
  const fadeInH1 = useFadeIn(undefined, 3);
  const fadeInP = useFadeIn(1, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>UseFadeIn</p>
    </div>
  );
}

export default App;
