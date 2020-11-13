import React from 'react'

import './taskInput.scss'

export function TaskInput({addNewTask, setValue, value}) {
    return (
        <form onSubmit={addNewTask}>
            <input
              type="text"
              autoFocus
              className="input-for-task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
    )
}