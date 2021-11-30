import React,{useState} from 'react';
import './App.css';
import Counter from './Counter.js';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {

  const [theme,SetTheme]= useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor : theme}}> 
    Function component
    <CounterHooks initialCount={0} />
    Class component
    <Counter initialCount={0}/>

    <button onClick={() => SetTheme(prevTheme => {
      return prevTheme ==='red' ? 'blue' : 'red'
    })}> Toggle Theme </button>
    
    </ThemeContext.Provider>
  )
} 

export default App;
