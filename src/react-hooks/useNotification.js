const useNotification = (title, options) => {
  if (!("Notification" in window)) return;
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options)
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options)
    }
  };
  return fireNotification;
}

function App() {
  const triggerNotification = useNotification("Hello", {body: "use Notification"})
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={triggerNotification}>useNotification</button>
    </div>
  );
}

export default App;
