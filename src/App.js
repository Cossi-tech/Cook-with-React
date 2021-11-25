import './App.css';
import Counter from './Counter.js';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <> 
    Function component
    <CounterHooks initialCount={0} />
    Class component
    <Counter initialCount={0}/>
    </>
  )
} 

export default App;
