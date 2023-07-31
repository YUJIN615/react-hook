const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }

  // API 요청을 보내서 페이지를 나가면 안 되는 경우
  const enablePrevent = () => window.addEventListener("beforeunload", listener);

  // 페이지 나가는 것을 막지 않아도 되는 경우
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent }
}

function App() {
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={enablePrevent}>Protect Page Leave</button>
      <button onClick={disablePrevent}>Unprotect Page Leave</button>
    </div>
  )
}

export default App;
