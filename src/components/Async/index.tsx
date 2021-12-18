import { useEffect, useState } from "react";

export function Async() {
  const [ isButtonInvisible, setisButtonInvisible ] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setisButtonInvisible(false)
    }, 1000)
  }, [])
  return (
    <div>
      <div>Hello</div>
      { isButtonInvisible && <button>Button</button>}
    </div>
  );
}