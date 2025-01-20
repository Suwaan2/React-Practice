import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/themeBtn";


function App() {

  const [themeMode, setThemeMode] = useState('light')
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //Actual change in the theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className="bg-red-500 text-black text-4xl">Context API part 2</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
