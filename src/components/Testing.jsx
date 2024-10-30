import React from 'react'
import img from '../images/OLznA3.jpg'
import { css } from '@emotion/css'

const Testing = () => {
  return (
    <>
        <div className={css`height: 120px; width: 200px;`}>Testing</div>
        <img alt='i am pic' src={img} className={css`height: 180px;
            width: 200px;
            &:hover{
            transform: scale(1.06);}`} />
    </>
  )
}

export default Testing