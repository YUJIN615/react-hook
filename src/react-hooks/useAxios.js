import defaultAxios from "axios";
import {useState, useEffect} from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const reFetch = () => {
    setState({
      ...state,
      loading: true,
    })
    setTrigger(Date.now())
  }
  useEffect(() => {
    if (!options.url) return;
    axiosInstance(options).then(response => {
      setState({
        ...state,
        loading: false,
        data: response.data.data
      })
    }).catch(error => {
      setState({
        ...state,
        loading: false,
        error
      })
    })

  }, [trigger])
  return {...state, reFetch};
}

export default useAxios;
