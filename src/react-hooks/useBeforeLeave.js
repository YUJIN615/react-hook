import { useEffect } from "react";

const useBeforeLeave = (callback) => {
  const handler = (event) => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const { clientY, clientX } = event;
    if (clientY <= 0 || clientX <= 0 || clientY > pageHeight || clientX > pageWidth) {
      callback();
    }
  };

  useEffect(() => {
    if (!callback || typeof callback !== "function") return;
    else {
      document.addEventListener("mouseleave", handler);
      return () => document.removeEventListener("mouseleave", handler);
    }
  }, []);
};

function App() {
  const callBeforeLeave = () => console.log("plz don't leave");
  useBeforeLeave(callBeforeLeave);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
