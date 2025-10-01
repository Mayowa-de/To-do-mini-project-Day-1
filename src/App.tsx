import {  createContext, useState } from 'react'
import Counter from './Counter/Counter'
import './index.css'

interface ThemeContextType{
  theme : string;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen'>
      <ThemeContext.Provider value = {{theme}}>
      <Counter/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
