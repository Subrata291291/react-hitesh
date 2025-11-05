import React from 'react'
import { useState, useCallback, useEffect, useRef } from "react";
function Passwordgenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
        <div className="w-full max-w-xl mx-auto shadow-2xl rounded-2xl px-7 py-7 my-8 text-orange-500 bg-gray-700">
        <h2 className="text-2xl text-white text-center mb-4">Password Generator</h2>

        <div className="flex shadow-2xl rounded-3xl bg-white mb-4 py-2 px-2 relative">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full px-4 text-black"
            placeholder="password"
            readOnly
          />
          <button
            className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>

          {copied && (
            <span className="absolute right-24 top-3 text-green-600 font-semibold transition-all duration-300">
              Copied!
            </span>
          )}
        </div>

        <div className="flex text-sm gap-x-4 flex-wrap items-center">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>

            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Passwordgenerator
