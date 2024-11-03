import React, {useContext} from 'react'
import { Context } from './Context'

const Count = () => {
  const {count, click} = useContext(Context);
  return (
    <>
        {count}
        <button onClick={click}>hello</button>
    </>
  )
}

export default Count