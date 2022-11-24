import { useState } from "react";

const useInput = () => {
  const [state, setState] = useState("");
  const onChange = (e) => {
    setState(e.target.value);
  };
  const attribute = {
    value: state,
    onChange,
  };
  return [state, setState, attribute];
};

export default useInput;
