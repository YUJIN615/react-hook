import {useEffect, useState} from "react";

function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  // useEffect는 componentWillUnmount, componentDidMount, componentWillUpdate의 역할을 모두 갖고있다.
  // 첫번째 인자: 실행할 함수
  // 두번째 인자
  // 아무것도 넘기지 않으면 이벤트가 발생할 때마다 첫 번째 인자로 넘긴 함수가 호출된다.
  // [state]를 넘기면 배열 안의 state가 변경될 때마다 첫 번째 인자로 넘긴 함수가 호출된다.
  // [] 빈 배열을 넘기면 첫 번째 렌더링 때 첫 번째 인자로 넘긴 함수가 호출된 후 다시 호출되지 않는다.
  useEffect(sayHello, [])
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={()=>{setNumber(number + 1)}}>{number}</button>
      <button onClick={()=>{setNumber2(number2 + 2)}}>{number2}</button>
    </div>
  )
}

export default App;
