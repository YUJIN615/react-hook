const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') return;
  if (onCancel && typeof onCancel !== 'function') return;

  const confirmAction = () => {
    if (window.confirm(message)) onConfirm();
    else onCancel();
  }
  return confirmAction;
}

function App() {
  const pressButton = () => {console.log("press button")};
  const abort = () => {console.log('abort')};
  const confirm = useConfirm('Are you sure?', pressButton, abort);

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirm}>Press button</button>
    </div>
  )
}

export default App;
