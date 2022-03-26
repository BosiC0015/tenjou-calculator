import React, { useState } from 'react';
import './App.scss';


function App() {
  const [total, setTotal] = useState<number | string>('');
  const [stones, setStones] = useState<number | string>('');
  const [unitStone, setUnitStone] = useState<number | string>('');
  const [oneDrawTicket, setOneDrawTicket] = useState<number | string>('');
  const [tenDrawTicket, setTenDrawTicket] = useState<number | string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const clear = (): void => {
    console.log('clear');
  };


  return (
    <div className="App">
      <h1>天井计算器（泛用版）</h1>
      <form
        id='tenjou-calc'
        autoComplete='off'
        onKeyDown={(event) => event.key === 'Enter' && event.preventDefault()}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className='inputs'>
          <label>一井总数：</label>
          <input
            className='input-total'
            placeholder='e.g.: 300'
            value={total}
            onChange={(event) => setTotal(Number(event.target.value))}
          />
        </div>
        <div className='inputs'>
          <label>现有钻数：</label>
          <input
            className='input-stones'
            placeholder='0'
            value={stones}
            onChange={(event) => setStones(Number(event.target.value))}
          />
        </div>
        <div className='inputs'>
          <label>一抽耗钻：</label>
          <input
            className='input-one-gasha'
            placeholder='0'
            value={unitStone}
            onChange={(event) => setUnitStone(Number(event.target.value))}
          />
        </div>
        <div className='inputs'>
          <label>单抽券：</label>
          <input
            className='input-1draw-ticket'
            placeholder='0'
            value={oneDrawTicket}
            onChange={(event) => setOneDrawTicket(Number(event.target.value))}
          />
        </div>
        <div className='inputs'>
          <label>十连券：</label>
          <input
            className='input-10draw-ticket'
            placeholder='0'
            value={tenDrawTicket}
            onChange={(event) => setTenDrawTicket(Number(event.target.value))}
          />
        </div>
        <div>
          <button onClick={clear}>清空</button>
          <button onClick={() => setShowResults(true)}>计算</button>
        </div>
      </form>
    </div>
  );
}

export default App;
