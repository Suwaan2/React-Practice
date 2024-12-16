import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "1234567890";
    if (character) str += "!~@$%^&*()_+{}[]:+/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, character, number, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character]);

  const passwordRef = useRef(null);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full h-full bg-gray-600">
      <h1 className="text-4xl">Password Generator</h1>
      <input
        type="text"
        className="w-96 p-3 rounded-xl"
        placeholder="Your Password"
        value={password}
        ref={passwordRef}
        readOnly
      />
      <button
        className="bg-blue-600 hover:bg-blue-300 p-3 rounded-2xl ml-2 cursor-pointer"
        onClick={copyPassword}
      >
        Copy
      </button>
      <div>
        <input
          type="range"
          className="cursor-pointer"
          id="length"
          value={length}
          min={10}
          max={100}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="length">Length: {length}</label>
        <input
          type="checkbox"
          className="ml-4"
          defaultChecked={number}
          onChange={() => {
            setNumber((prev) => !prev);
          }}
        />
        <label htmlFor="Number">Number</label>
        <input
          type="checkbox"
          className="ml-4"
          defaultChecked={character}
          onChange={() => {
            setCharacter((prev) => !prev);
          }}
        />
        <label htmlFor="Character">Character</label>
      </div>
    </div>
  );
}

export default App;
