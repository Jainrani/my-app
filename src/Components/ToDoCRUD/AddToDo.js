import React from 'react'
import { useState } from 'react'

export default function AddToDo({ addToDo }) {
    let [todoText, setTodoText] = useState('');
    let changeHandler = (e) => {
        setTodoText(e.target.value)
    }
    return <>
        <div className='border p-2 text-center'>
            <div class="form-group mb-2">
                <input type="text" class="form-control" onChange={changeHandler} />
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => { addToDo(todoText) }}>
                Add To Do
            </button>
        </div>
    </>
}
