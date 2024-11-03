import React, { useState, useEffect } from 'react'
import { css } from '@emotion/css'

const Input = () => {

    const [name, setName] = useState("Devashish");
    const [newname, setNewName] = useState("Aditi")

    useEffect(() => {
        console.log(name)
    }, [newname]);

    return (
        <div className={css`margin-top: 100px`}>
            <input value={name} className={css`border: 2px solid black; height: 40px; width: 200px; padding: 20px; border-radius: 5px`} type="text" onChange={(event) => { setName(event.target.value) }} />
            <input value={newname} className={css`border: 2px solid black; height: 40px; width: 200px; padding: 20px; border-radius: 5px`} type="text" onChange={(event) => { setNewName(event.target.value) }} />
        </div>
    )
}

export default Input