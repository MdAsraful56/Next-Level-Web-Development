// import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './redux/features/counterSlice';
// import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  const handleReset = () => {
    dispatch(reset());
  };



  return (
    <div className='style'>
      <h1>Counter With Redux</h1>
      <section>
        <div className="increment-div">
          <button onClick={() => handleIncrement(1)}>Increment</button>
          <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        </div>
        <div style={{ fontSize: '2rem' }}>{count}</div>
        <div className="dcrement-div">
          <button onClick={() => handleDecrement(1)}>Decrement</button>
          <button onClick={() => handleDecrement(10)}>Decrement by 10</button>
        </div>
        <button className='reset' onClick={() => handleReset()}>Reset</button>
      </section>
    </div>
  )
}

export default App
