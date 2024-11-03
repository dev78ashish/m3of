import React from 'react'
import { useState } from 'react'
import Testing from './components/Testing'
import Parent from './components/Parent'
import State from './components/State'
import { Context } from './components/Context'
import Click from './components/Click'
import { css } from '@emotion/css'
import Input from './components/Input'


const App = () => {
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }

  const clicked =() =>{
    alert("Hello I am devashish")
  }

  return (
    <div className={css`width: 100%; text-align: center;`}>
      <Context.Provider value={{count, click, clicked}}>
        <Testing />
        <Parent />
        <State />
        <Click />
        <Input />
      </Context.Provider>
    </div>
  )
}

export default App