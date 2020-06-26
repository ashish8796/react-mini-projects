import React from "react";
import myThemeContext from "./ThemeContext";


export default function ThemeButton() {
  const [lightMode, setLightMode] = myThemeContext();
  return (
    <div className="set-theme">
      <div className="switch">
        <input type="checkbox" className={`ckbox ${lightMode && "go-right"}`} onClick={(e) => {
          setLightMode(!lightMode);
          localStorage.setItem("theme", JSON.stringify(!lightMode))
        }} defaultChecked={lightMode} />
        <span className="slider round "></span>
      </div>
    </div>
  )
}