import React from 'react'
import { css } from '@emotion/css'

const color='white'

const New = (props) => {
  // console.log(name)
  return (
    <div
    className={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >jogeo</div>
  )
}

export default New