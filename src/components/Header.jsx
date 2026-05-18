import React from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <h1>Shopping App</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  )
}

export default Header