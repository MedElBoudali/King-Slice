import { useState } from "react";

const useForm = defaults => {
  const [values, setValues] = useState(defaults);
  const updateValue = e => {
    let { name, value, type } = e.target;
    type === "number" && (value = parseInt(value));
    setValues({ ...values, [name]: value });
  };

  return { values, updateValue };
};

export default useForm;
