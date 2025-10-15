import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [ numberAllowed, charAllowed, passwordGenerator]);


  // useRef hook
  const passwordRef = useRef();

  const copyToClipboard = useCallback(() => {
   passwordRef.current?.select();
   passwordRef.current?.setSelectionRange(0, 25); // For mobile devices
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="flex flex-col gap-y-6 w-full bg-gray-700 rounded-xl shadow-lg shadow-gray-600 p-4 items-center justify-center">
        <h1 className="text-white text-3xl">Password Generator</h1>
        <div className="flex text-orange-600">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="bg-white w-full text-2xl rounded-lg rounded-r-none py-2 px-4"
          />
          <button onClick={copyToClipboard} className="outline-0 text-white bg-blue-600 px-6 py-1 shrink-0 rounded-r-xl hover:bg-blue-700 transition-all ease-in-out">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-6 justify-evenly">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              
            />
            <label className="text-white">Length: <span className="text-orange-600">{length}</span></label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked = {numberAllowed}
            id="numberInput"
            className="accent-orange-500"
            onChange={() => {
              setNumberAllowed((perv) => (!perv))
            }}
             />
            <label htmlFor="numberInput" className="text-white">Numbers</label>
          </div>

           <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked = {charAllowed}
            id="charInput"
            className="accent-orange-500"
            onChange={() => {
              setCharAllowed((prev) => (!prev))
            }}/>
            <label htmlFor="charInput" className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
