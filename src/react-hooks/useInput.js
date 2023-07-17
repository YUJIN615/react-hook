import {useState} from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [willSubmit, setWillSubmit] = useState(true);
  let willUpdate = true;
  const onChange = event => {
    const { target: {value} } = event;
    if (typeof validator.checkMaxLength === 'function') {
      willUpdate = validator.checkMaxLength(value);
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  const onClick = () => {
    if (typeof validator.checkEmail === 'function') {
      setWillSubmit(validator.checkEmail(value));
    }
  }
  return { value, onChange, onClick, willSubmit }
}
function App() {
  const validator = {
    checkMaxLength : (value) => {return value.length <= 20},
    checkEmail : (value) => {return value.includes('@')}
  }
  const validateText = '이메일 형식으로 입력해주세요.'
  const {value, onChange, onClick, willSubmit} = useInput('', validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="email" value={value} onChange={onChange} type="text"/>
      <button onClick={onClick}>submit</button>
      {!willSubmit && <div>{validateText}</div>}
    </div>
  );
}

export default App;
