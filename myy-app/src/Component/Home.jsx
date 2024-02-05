import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: theme === "dark" ? "blue" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1>Theme : {theme}</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    );
}

export default Home
