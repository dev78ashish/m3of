import React, {useContext} from 'react'
import { Context } from './Context'
import { css } from '@emotion/css'

const Click = () => {
    const value = useContext(Context)
  return (
    <div>
        <button className={css`background-color: red;
            padding: 20px`} onClick={value.clicked}>
            I AM CLICK
        </button>
    </div>
  )
}

export default Click